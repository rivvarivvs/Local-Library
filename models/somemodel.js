//require mongoose
const mongoose = require('mongoose')

//define a schema
const Schema = mongoose.Schema

const SomeModelSchema = new Schema({
    a_string        : String,
    a_date          : Date,
})

module.exports = mongoose.model('SomeModel', SomeModelSchema)