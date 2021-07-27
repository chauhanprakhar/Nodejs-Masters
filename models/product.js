const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type: String,
        ref: "Category"
    },
    subcategory:{
        type: String,
        ref: "subCategory"
    }
})

mongoose.model("Product",productSchema)