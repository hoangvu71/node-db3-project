const db = require("../data/config");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({id})
}

function findSteps(id) {
    return db("schemes")
    .join("steps", "steps.scheme_id", "schemes.id")
    .where("schemes.id", id)
    .select("schemes.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
}   

function add(scheme) {
    const id = db("schemes").insert(scheme)
    return id
}

function update(changes, id) {
     db("schemes").where({id}).update(changes)
     return findById(id).first()
}

function remove(id) {
    return db("schemes").where({id}).del()
}