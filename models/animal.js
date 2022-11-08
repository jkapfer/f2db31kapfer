const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    name: String,
    genus: String,
    species: String,
    legs: Number
})

module.exports = mongoose.model("Animals", animalSchema)
