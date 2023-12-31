import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';
import CartItem from '../pages/cart/Cart-items';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {  // Add 'props' as a parameter

    const getDefaultCart = () => {
        let cart = {};

        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart());  // Initialize cartItems with getDefaultCart()

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                let iteminfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * iteminfo.price
            }
        }

        return totalAmount;

    }  

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const updateCartItemCount = (newAmount , itemId) => {
        setCartItems((prev) => ({ ...prev , [itemId]: newAmount }));
    }

    const contextValue = { cartItems, addToCart, removeFromCart , updateCartItemCount , getTotalCartAmount}

    console.log(cartItems);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>  
};
