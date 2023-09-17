const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = "mongodb+srv://abc:abc@cluster0.e1y5hap.mongodb.net/iNotebook"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () =>{
        console.log("Connected to mongo succesfully");
    })   
}

module.exports = connectToMongo;