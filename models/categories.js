const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
    // subCategories :[{type:ObjectId,ref:"subCategory"}]
})

mongoose.model("Category",categorySchema)