const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://aditi:aditi@cluster0.bxaz2tg.mongodb.net/airticket?retryWrites=true&w=majority")

module.exports = {connection}