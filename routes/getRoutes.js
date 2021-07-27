const express = require('express')
const router = express.Router()
const mongoose  = require('mongoose')

const Category = mongoose.model("Category")
const subCategory = mongoose.model("subCategory")
const Product = mongoose.model("Product")

// get all categoris
router.get('/categories', async (req,res) => {
    try{
    const categories = await Category.find().select('title -_id');
    return res.status(200).send( categories );
    }catch(e){
        console.log(e);
        res.status(500).end();
    }
})

//get all subcategories
router.get('/subcategories', async (req,res) => {
    try{
    const subcategories = await subCategory.find({category: req.body.category})
    .select('title -_id');
    return res.status(200).send( subcategories );
    }catch(e){
        console.log(e);
        res.status(500).end();
    }
})

// get all products of given subcategory or category
router.get('/products', async (req,res) => {
    // searching produts by category
    if(req.body.category){
        try{
        const products = await Product.find({category: req.body.category})
        .select('title -_id');
        return res.status(200).send(products);
        }catch(e){
            console.log(e);
            res.status(500).end();
    }
 }
 // searching products by subcategory
    if(req.body.subcategory){
        try{
            const products = await Product.find({subcategory: req.body.subcategory})
            .select('title -_id');
            return res.status(200).send(products);
            }catch(e){
                console.log(e);
                res.status(500).end();
            }
    }
})

module.exports = router