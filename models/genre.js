const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenreSchema = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book', require: true },
        name: { type: String, require: true, minlength: 3, maxlength: 100}
    }
)

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function() {
    return '/catalog/genre/' + this._id;
})

module.exports = mongoose.model('Genre', GenreSchema)