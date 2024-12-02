require("dotenv").config();
const Database = require("./config/database");

const express = require('express');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

Database.connect();

app.get("/" , (req,res) =>{
    res.json({message : "server is running"});
})

require("./routes/app.routes.js")(app)

const PORT = process.env.PORT||3000;
app.listen(PORT , () => {
    console.log(`Server is listening on ${PORT}`);
})
