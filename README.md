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















<img width="884" alt="11" src="https://user-images.githubusercontent.com/54539712/127251621-eb84704b-fe06-4efe-9bb1-b9ccc83d1ead.png">
<img width="877" alt="12" src="https://user-images.githubusercontent.com/54539712/127251632-45cad0f0-29ec-4909-a394-01f3b3013e3d.png">
<img width="872" alt="13" src="https://user-images.githubusercontent.com/54539712/127251640-267ef546-1ff9-4033-9810-5aa2030930c2.png">
<img width="885" alt="14" src="https://user-images.githubusercontent.com/54539712/127251648-7d3a957d-cb4c-494d-be7d-e2f14401e102.png">
<img width="877" alt="15" src="https://user-images.githubusercontent.com/54539712/127251655-30b5c081-31d7-4bc2-96b9-f29065935a23.png">
<img width="885" alt="16" src="https://user-images.githubusercontent.com/54539712/127251665-7c9d2569-62e7-4fb0-bd80-cfd3da5a56e5.png">
<img width="881" alt="17" src="https://user-images.githubusercontent.com/54539712/127251671-c24d0901-ddbe-40c2-b61f-1bdcdbec5821.png">


