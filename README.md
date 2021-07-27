## Available Scripts

You can run this project by following commands in project directory

### Install node dependencies
```shell
 npm install
```

## API Endpoints

### POST  http://localhost:5000/addcategory
```shell
{
    "title":""
}
```
API path to create a category 

### POST  http://localhost:5000/addsubcategory
```shell
{
    "title": "",
    "category": ""
}
```
API path to create a subcategory

### POST  http://localhost:5000/addproduct
```shell
{
    "subcategory": "",
    "title": ""
}
```
API path to add a produt with given subcategory

### POST  http://localhost:5000/updateproduct
```shell
{
    "category": "",
    "subcategory": "",
    "title": ""
}
```
API path to add a product with existing category and subcategory

### GET  http://localhost:5000/categories
API path to get all categories

### GET  http://localhost:5000/subcategories
```shell
{
    "category": ""
}
```
API path to get all subcategories

### GET  http://localhost:5000/products
```shell
{
    "subcategory": ""
}
```
Or
```shell
{
    "category": ""
}
```
API path to get all products either based on category or subcategory

## Default config variables are

PORT = 5000
MongoURL = mongodb cloud atlas(You can either change atlas link or you can use mine because of
 access allowed from everywhere you do not need to change database)


