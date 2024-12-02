const mongoose = require("mongoose")

const AppSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true , "A tour must have a name"],
        unique : [true , "name already exists"],
        maxlength : [20 , "name must have less than 20 characters"],
        minlength : [10 , "name must have greater than 10 characters"]
    },
    price : {
        type : Number,
        required : [true , "A tour must have price"],
    },
    rating : {
        type : Number,
        default : 4.5,
        min : [1 , "Rating must be 1 or greater"],
        max : [5 , "Rating must be 5 or less"],
    },
    difficulty : {
        type : String,
        required : [true , "A tour must have difficulty level"],
        enum : {
            values : ["easy" , "medium" , "difficult"],
            message : "Difficulty is either easy,medium,difficult"
        },
    },
})

module.exports = mongoose.model("tours" , AppSchema )