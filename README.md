# About
A simple shopping cart that allows for the usual CRUD operations using ReactJS. 

The application consists of three columns:
- `Products` This illustrates what the end user can see in a web shop. Here the user can add products to their basket. Currently dummy sample data is used as illustration. 
- `Basket` The Basket is used to illustrate which products the end user has chosen to "purchase".
- `Inventory` This illustrates the "backend" where the managers of the web shop are able to Add, Remove or Edit products. 

For the sake of conveniency everything is made on a single page with three columns separating the different elements. Additionally, the application does not have any sort of persistence. 

## 1 Install
Navigate to `react-shopping-cart/react-shopping-cart/` in your prefered terminal run `npm install` this will install all the necessary elements needed in order to run the application.

You will need [`NodeJS`](https://nodejs.org/en/download/) (version v12.13.1) and `npm` (version 6.13.4). `npm` is installed with NodeJS.

## 2 Run
Navigate to `react-shopping-cart/react-shopping-cart/` in your prefered terminal run `npm start` this will start the application on your `localhost` at port `3000`. If said port is in use, you will be prompted to use a different port.

## 3 Usage
In your prefered browser navigate to http://localhost:3000/ 

On the application you can:
- Load some dummy data by clicking `Load Sample Data` button.
- Add products to basket by clicking `Add To Basket` button.
- Remove from order by clicking the `X` button.
- Add new products by using the `Add Product` form.
- Edit products by using the corresponding forms for said product.
- Remove products by clicking the `Remove Product` button.
- See live updates everytime a product is updated. Try to for example changing the status of a product to be `Out of Stock`.

![](demoGif.gif)
