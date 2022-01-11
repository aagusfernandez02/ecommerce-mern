import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import DetailProduct from './detailProduct/DetailProduct';
import Products from './products/Products';
import NotFound from './utils/not_found/NotFound';

const Pages = () => {
    return (
        <Routes>
            <Route element={<Products/>} path="/"/>
            <Route element={<DetailProduct/>} path="/detail/:id"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Cart/>} path="/cart"/>
            
            
            <Route element={<NotFound/>} path="*"/>
        </Routes>
    )
}

export default Pages
