const express = require('express')
const app = express()
const router = express.Router()
const mongoose  = require('mongoose')
// import models
require('./models/categories.js')
require('./models/subCategories.js')
require('./models/product.js')
const PORT = 5000

app.use(express.json())

// connection to mongodb
mongoose.connect("",{
    useNewUrlParser:true,
    useUnifiedTopology: true

})

// import api paths
app.use(require('./routes/postRoutes.js'))
app.use(require('./routes/getRoutes.js'))

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
