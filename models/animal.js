const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    name: String,
    genus: String,
    species: String,
    legs: {
        type: Number,
        min: [0, 'No animal has negative legs!'],
        max: [1000, 'No animal on Earth has that many legs!']
    }
})

module.exports = mongoose.model("Animals", animalSchema)
