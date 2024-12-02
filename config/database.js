const mongoose = require("mongoose");
require("dotenv").config();

const {MONGODB_URL} = process.env;

exports.connect = () => {
    mongoose.connect(MONGODB_URL , {
    })
    .then(console.log(`DB connection successfull`))
    .catch((err)=>{
        console.log(`Error connecting database`);
        console.log(err);
        process.exit(1);
    })
}