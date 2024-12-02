const App = require("../models/app.model.js")
 
exports.findAll = (req , res) => {
    App.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err.stack);
        res.status(500).send({
            message : 
            err.message|| " some error occured",
        });
    });
}