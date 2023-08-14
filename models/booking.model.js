const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    user : { type: mongoose.Types.ObjectId, ref: 'user' },
    flight : { type: mongoose.Types.ObjectId, ref: 'flight' }
})

const BookModel = mongoose.model("book", bookSchema)

module.exports = {BookModel}