import React from 'react';
import './NewShop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const NewShop = (props) => {
 
    const{name,img,price,seller,ratings}=props.product
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:{price}</p>
                <p>Manufacture: <small>{seller}</small></p>
                <p >Ratings: <small>{ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={()=>props.handleAddToCart(props.product)}><p className='product-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default NewShop;