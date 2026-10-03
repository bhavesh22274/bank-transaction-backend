require("dotenv").config()
const mongoose=require("mongoose")
function connectDB(){
    mongoose.connect(process.env.MONGO_URI) 
    .then(()=>{
        console.log("server is Connected to Db");
        
    })
    .catch(err=>{
        console.log("Error connecting to Db",err);
        process.exit(1)
        
    })
}
module.exports=connectDB