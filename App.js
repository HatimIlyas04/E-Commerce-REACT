import { useState } from 'react';
// import List from './Compenent/list/List';
import ProductList from './Compenent/Product/productList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



// import './App.css';
// import WelcomeFC from './Compenent/Welcome/WelcomeFC';
// import WelcomeCC from './Compenent/Welcome/WelcomeCC';
// import Counter from './Compenent/Welcome/WelcomeCC';
import React from 'react';
// import Sidebar from './CRUD-APP/Sidebar';
// import Navbar from './CRUD-APP/Navbar';
import { createRoot } from 'react-dom/client';

// import State from './test/state';
import Navbar from './BASIC E-COMMERCE/Navbar';
import Slider from './BASIC E-COMMERCE/Slider';
import ProductsList from './BASIC E-COMMERCE/ProductsList';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';



// import Home from './CRUD-APP/Pages/Home';
// import Products from './CRUD-APP/Pages/Products';
// import AddProducts from './CRUD-APP/Pages/AddProduct';
// import ProductDetails from './CRUD-APP/Pages/ProductDetails';
// import Edit from './CRUD-APP/Pages/Edit';
import About from './BASIC E-COMMERCE/About';
import ProductDetails from './ProductDetails';
import ContactUs from './BASIC E-COMMERCE/ContactUs';
import Footer from './BASIC E-COMMERCE/Footer';


// import Product from './Compenent/Product/Product';
// import Form from './Compenent/form/form';

function App() {

  // let [IsLoggedIn , setIsLoggedIn] = useState(true);
  // let element = IsLoggedIn ? <h1>i'm loggedIn</h1> :  <h1>i'm not loggedIn</h1>;
  // if (IsLoggedIn) {
  //   element = <h1>i'm loggedIn</h1>
  // }else{
  //   element = <h1>i'm not loggedIn</h1>
  // }


  return (
    <div className='App' style={{ textAlign: 'center' }}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Slider />
              <ProductsList />
              <Footer/> 
            </div>
          }
        />
        <Route path="/About" element={<div><About /></div>} />
        <Route path="/ProductDetails/:productId" element={<div><ProductDetails /></div>} />
        <Route path='/ContactUs' element={<div><ContactUs /></div>} />
      </Routes>
      
      {/* <List/> 
    <ProductList /> */}

      {/* <State/>*/}

      {/*<div >
          <Navbar />
        </div>
        <div className='row'>
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Products/Add" element={<AddProducts />} />
              <Route path="/Products/:productID" element={<ProductDetails/>} />
              <Route path="/Products/Edit/:productID" element={<Edit />} />
              </Routes>
          </div>
          <div>
          <p>Created by Hatim Ilyas. © 2023</p>
          </div>
        </div>*/}








      {/* <Form /> */}
      {/*<center><WelcomeFC name="khalid" age="19" title="js deeev" /></center>
        <center><WelcomeFC name="saad" age="17" title="css dev" /></center>*/}
      {/*  <center></center> -->
      <center>
        <Product name='product-1' title="lorem lorem lorem 1" prix="100" />
      </center>
      <center>
        <Product name='product-2' title="lorem lorem lorem 2" prix="150" />
      </center>
      <center>
        <Product name='product-3' title="lorem lorem lorem 3" prix="200" />
      </center>
      {/* <button onClick={()=> setIsLoggedIn(false)}>login</button>
        {element} */}
    </div>
  );
}

export default App;
