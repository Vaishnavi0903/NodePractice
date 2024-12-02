const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/nature-test",{useNewUrlParser:true}).then(()=>{
    console.log("Successfully connected to database")
}).catch((err)=>{
    console.log("Could not connect to database" , err);
    process.exit();
});


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/" , (req,res) =>{
    res.json({message : "server is running"});
})

require("./routes/app.routes.js")(app)

let PORT = 8081;
app.listen(PORT , () => {
    console.log(`Server is listening on ${PORT}`);
})
