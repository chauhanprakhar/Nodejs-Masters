const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    // product :[{type:ObjectId,ref:"products"}],
    category:{
        type: String,
        ref: "Category"
    }
})

mongoose.model("subCategory",categorySchema)