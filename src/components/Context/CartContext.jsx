import axios, { Axios } from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cartItems, setcartItems] = useState(null);

    let headers = {
        Token: localStorage.getItem('userToken')
    }
    //Add to cart function
    async function AddToCart(productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
                productId
            }, {
                headers
            });
            console.log('data of add to cart func', data);
            setcartItems(data);
            toast.success(data.message, {
                duration: 1000
            });
            return data;


        } catch (err) {
            console.log('err of the add to cart function', err);

        }

    };


    //get logged user cart function 
    async function getCartItems() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers
            });
            console.log(data);
            setcartItems(data);
            return data;

        } catch (err) {
            console.log('err of the getcartitems function', err);

        }
    };

    useEffect(() => {
        getCartItems();
        getWishListItems();
    }, []);


    //function of update product count


    async function updatePorductCount(productId, count) {
        try {
            let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                count
            }, {
                headers
            })
            setcartItems(data);
            console.log('update is done');
            return data;

        } catch (err) {
            console.log('the err of updatePorductCount function', err);

        }
    };


    //delete product function
    async function deleteProduct(productId) {
        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                headers
            });
            setcartItems(data);
            console.log('delete is done');
            return data;

        } catch (err) {
            console.log('the err of the delete product function', err);

        }
    };


    //clear user cart function
    async function clearCart() {
        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers
            });
            setcartItems(data);
            toast.success('Cart cleared successfully', {
                duration: 1000
            });
            return data;
        } catch (err) {
            console.log('the err of the clear cart function', err);
        }
    };

    //add product to wishlist

    async function addToWishList(productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                productId
            }, {
                headers
            });
            console.log('data of add to wishlist func', data);
            setcartItems(data);

            return data;


        } catch (err) {
            console.log('err of the add to cart function', err);

        }

    };
    //remove product from wishlist

    async function removeFromWishList(productId) {
        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                headers
            });
            console.log('data of remove from wishlist func', data);
            setcartItems(data);

            return data;


        } catch (err) {
            console.log('err of the add to cart function', err);

        }

    };


    //get logged of wishlist function

    async function getWishListItems() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                headers
            });
            console.log('data of getwishlistitems function ',data);
            setcartItems(data);
            return data;

        } catch (err) {
            console.log('err of the getWishListItems function', err);

        }
    };


    //check out session

    async function checkOutSession(shippingAddress){
        try{
            let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartItems.data._id}?url=http://localhost:5173`,{
                shippingAddress
            },{
                headers
            });
            console.log(data);
            return data;
            

        }catch(err){
            console.log('the err of the session func',err);
            

        }
    }







    return <CartContext.Provider value={{ checkOutSession,getWishListItems,removeFromWishList, addToWishList, clearCart, deleteProduct, updatePorductCount, getCartItems, AddToCart, cartItems, setcartItems }}>
        {children}
    </CartContext.Provider>

}