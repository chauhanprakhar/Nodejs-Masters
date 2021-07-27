const express = require('express')
const router = express.Router()
const mongoose  = require('mongoose')

// registering models
const Category = mongoose.model("Category")
const subCategory = mongoose.model("subCategory")
const Product = mongoose.model("Product")

// category api path
router.post('/addcategory', async (req,res) => {
    const {title} = req.body
    if ( !title) {
        return res.status(422).send({ message: 'Enter name of category' });
      }
      try {
        // check for existing category
        const user = await Category.findOne({ title: title })
          .lean()
          .exec();
        if (user) {
          return res.status(409).send({ message: 'Category already exists' });
        }
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      try{
        // create new category
        const category = await Category.create({title})
        res.status(201).send({message:"category created"})
      }catch(e){
        console.log(e);
        return res.status(500).end();
      } 
})

// subcategory api path
router.post('/addsubcategory', async (req,res) => {
    const {title, category} = req.body
    if ( !title ) {
        return res.status(422).send({ message: 'Enter name of subcategory' });
      }
      if (!category) {
        return res.status(422).send({ message: 'Enter name of category' });
      }
      try {
        // check for existing category
        const _category = await Category.findOne({ title: category })
          .lean()
          .exec();
        if (!_category) {
          return res.status(409).send({ message: 'Category does not exist' });
        }
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      try{
        // create new category
        const subcategory = await subCategory.create({
            title,
            category
        })
        res.status(201).send({message:"subcategory created"})
      }catch(e){
        console.log(e);
        return res.status(500).end();
      } 
})

// product adding api 
router.post('/addproduct', async (req,res) => {
    const {title, subcategory} = req.body
    let category
    if ( !title ) {
        return res.status(422).send({ message: 'Enter name of product' });
      }
      if (!subcategory) {
        return res.status(422).send({ message: 'Enter name of subcategory' });
      }
      //retrieving category from subctegory
      if (!category) {
        try{
            const res = await subCategory.find({title: req.body.subcategory})
            .select('category -_id')
            .lean()
            .exec();
            category = res[0].category
            }catch(e){
                console.log(e);
                res.status(500).end();
            }
      }
      try {
        // check for existing subcategory
        const sub_category = await subCategory.findOne({ title: subcategory })
          .lean()
          .exec();
        if (!sub_category) {
            return res.status(409).send({ message: 'Sub Category does not exist' });
        }
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      try{
        // create new product
        const product = await Product.create({
            title,
            subcategory,
            category
        })
        res.status(201).send({message:"product added"})
      }catch(e){
        console.log(e);
        return res.status(500).end();
      } 
})

// product api path with existing category and subcategory
router.post('/updateproduct', async (req,res) => {
    const {title, category, subcategory} = req.body
    if ( !title ) {
        return res.status(422).send({ message: 'Enter name of product' });
      }
      if (!subcategory) {
        return res.status(422).send({ message: 'Enter name of subcategory' });
      }
      if (!category) {
        return res.status(422).send({ message: 'Enter name of category' });
            
      }
      try {
        // check for existing subcategory
        const sub_category = await subCategory.findOne({ title: subcategory })
          .lean()
          .exec();
        if (!sub_category) {
            return res.status(409).send({ message: 'Sub Category does not exist' });
        }
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      try {
        // check for existing category
        const _category = await Category.findOne({ title: category })
          .lean()
          .exec();
        if (!_category) {
            return res.status(409).send({ message: 'Sub Category does not exist' });
        }
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
      try{
        // create new product under given category and subcategory
        const product = await Product.create({
            title,
            subcategory,
            category
        })
        res.status(201).send({message:"product added"})
      }catch(e){
        console.log(e);
        return res.status(500).end();
      } 
})

module.exports = router