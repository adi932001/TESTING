const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
    tasks:{
        type:String,
        trim :true,
        maxlength:1000
    }
},{timestamps:true})

module.exports=mongoose.model("Tasks",taskSchema)