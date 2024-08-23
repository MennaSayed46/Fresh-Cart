import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
import Loading from '../Loading/Loading';
import style from './Cart.module.css'
import React, { useContext, useEffect, useState } from 'react'

export default function Cart() {
  let { deleteProduct, getCartItems, updatePorductCount } = useContext(CartContext);
  let [cart, setCart] = useState(null);
  let {cartItems}=useContext(CartContext);
  let {clearCart}=useContext(CartContext);
  let {addToWishList}=useContext(CartContext);

  //add to wishlist function

  async function deleteProductFromCart(productId) {
    let response = await deleteProduct(productId);
    setCart(response.data);
 

  }




  //clear cart items function

  async function clearCartItems() {
    let response = await clearCart();
    console.log('response of clearcartitems function', response.data);
    setCart(response.data);
 


  }

  


  //function of getCart
  async function getCart() {
    let response = await getCartItems();
    console.log('response of getcart function', response.data);
    setCart(response.data);
 


  }
  useEffect(() => {
    getCart();
  }, []);

  //updateCartCount function 

  async function updateCart(productId, Count) {

    if (Count > 1 || Count == 1) {
      let response = await updatePorductCount(productId, Count);
      setCart(response.data);
      console.log('response is',response);
     
      
    } else {
      deleteProductFromCart(productId);
    }


  }

  //deleteproduct
  async function deleteProductFromCart(productId) {
    let response = await deleteProduct(productId);
    setCart(response.data);
 

  }


  



  return (
    <>
      {cart ? <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 w-5/6 mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          

          {cart?.products.map((product, index) => {

            return (


              <tbody key={index}>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={product.product.imageCover} className="w-full md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className="text-xl px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.product.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button onClick={() => { updateCart(product.product.id, product.count - 1) }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <span>{product.count}</span>
                      </div>
                      <button onClick={() => { updateCart(product.product.id, product.count + 1) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>

                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl">
                    {product.price} EGP
                  </td>
                  <td className="px-6 py-4">
                    <span className='text-red-600 font-semibold text-xl cursor-pointer' onClick={() => { deleteProductFromCart(product.product.id) }} clspanssName="font-medium text-red-600 dark:text-red-500 hover:underline ">Remove</span>
                  </td>
                </tr>
              </tbody>



            )


          })}

        </table>
        <div className='footerOfCart  bg-slate-100'>
          <div className="flex justify-between py-3 px-2">
            <p className='py-3 text-3xl font-bold '>Cart Shop</p>
            <button className='bg-[#4fa750] rounded-md text-center py-3 px-4 text-xl font-medium '><Link to={`/checkout`}>Checkout</Link></button>
          </div>
          <hr />

          <div className="flex justify-between p-4">
            <p className='totalOfPrice text-2xl capitalize font-bold'>total price: <span className='text-[#4fa750]'>{cart.totalCartPrice}</span></p>
            <p className='totalOfPrice text-2xl capitalize font-bold'>total items: <span className='text-[#4fa750]'>{ cartItems.numOfCartItems}</span></p>
           
          </div>
          <hr />

          <div className="flex justify-center items-center p-10">
          <button onClick={()=>clearCartItems()} className={`${style.clearYourCart } border-[#4fa750] rounded-md text-center py-3 px-4 text-xl font-medium `}> Clear Your Cart</button>



          </div>


        </div>
      </div> : <div className='bg-gray-100 m-14 p-12'>
        <p className='text-3xl font-bold'>Cart Shop</p>
        <p className='text-3xl font-bold'>your cart is empty</p>
      </div>
      }







    </>
  )
















}
