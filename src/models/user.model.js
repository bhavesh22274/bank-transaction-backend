const mongoose=require ("mongoose")
const bcrypt=require("bcryptjs")




const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required for creating a user"],
        trim:true,
        lowercase:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please provide a valid email address"],//regex for email validation
        unique:[true,"Email address already exists"]
    },
    name:{
        type:String,
        required:[true,"Name is required for creating a user"],
    },
    password:{
        type:String,
        required:[true,"Password is required for creating a user"],
        minlength:[6,"Password must be at least 6 characters long"],
        select:false//this will prevent the password from being returned in any query
    }
},{timestamps:true})
userSchema.pre("save",async function(){  //this function will run before saving the user to the database
    if(!this.isModified("password")){
        return 
    }
    const hash=await bcrypt.hash(this.password,10)
    this.password=hash
    return 
})
userSchema.methods.comparePassword=async function(password){//this function will compare the password entered by the user with the hashed password stored in the database
    return await bcrypt.compare(password,this.password)
}
const userModel=mongoose.model("user",userSchema)
module.exports=userModel