import React, { useEffect, useState } from 'react';
import {addToDb, getStoredCart} from '../utilities/fakedb'
import Cart from '../components/Cart/Cart';
import NewShop from '../components/NewShop/NewShop';
import './NewProduct.css'

const NewProduct = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
       
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])

    useEffect(()=>{
        const storedCart=getStoredCart();
        const saveCart=[];
        for(const id in storedCart){
          const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct)
            }
        }
     setCart(saveCart)
    },[products])

    const [cart,setCart]=useState([])
    const handleAddToCart=(selectedProduct)=>{
        console.log(selectedProduct)
        let newCart=[];
        const exits=cart.find(product=>product.id===selectedProduct.id);
        if(!exits){
            selectedProduct.quantity=1
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest=cart.filter(product=>product.id!== selectedProduct.id);
            exits.quantity=exits.quantity+1;

            newCart=[...rest,exits]
        }
    //    const newCart=[...cart,selectedProduct];
       setCart(newCart)
       addToDb(selectedProduct.id)
    }
    return (
        <div className='product'>
            <div className="product-container">
               {
                products.map(product=><NewShop product={product} key={product.id} handleAddToCart={handleAddToCart}></NewShop>)
               }
            </div>
            <div className="products-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default NewProduct;