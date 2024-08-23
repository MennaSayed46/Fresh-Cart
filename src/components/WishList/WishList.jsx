


import { CartContext } from '../Context/CartContext';
import Loading from '../Loading/Loading';
import style from './WishList.module.css';
import React, { useContext, useEffect, useState } from 'react';

export default function WishList() {

  let {AddToCart , getWishListItems,removeFromWishList } = useContext(CartContext);
  let [wishList, setwishList] = useState(null);

  //function of remove or delete product
  async function remove(productId) {
    let response = await removeFromWishList(productId);
    console.log('response of delete',response);

    setwishList((prevWishList) => prevWishList.filter(product => product._id != productId));


  }

  //function of add product




  async function getWishList() {
    let response = await getWishListItems();
    console.log('response of getwishlist function', response.data);
    setwishList(response.data);
  }

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <>

    {wishList?  <div className="w-[95%] my-4 mx-auto p-4 bg-gray-200">
        <p className='text-3xl font-bold capitalize my-4'>my WishList</p>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {wishList?.map((product, index) => {
          return (
            <tbody key={index}>

            <tr className="bg-red border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">

              <td className="p-4 ">
                <img src={product.imageCover} className="w-full md:w-32 max-w-full max-h-full" alt="Apple Watch" />
              </td>

              <td className="text-xl px-6 py-4 font-semibold text-gray-900 dark:text-white space-y-2">
                <p className='text-2xl font-semibold text-black'>{product.category.name}</p>
                <p className='text-2xl font-semibold text-[#4fa750]'>{product.price}</p>
                <button onClick={()=>{remove(product._id)}}> 
                   <i class="fa-solid fa-trash text-2xl text-red-600 pe-1"></i> 
                   <span className='text-red-600'>Remove</span>
               </button>

              </td>

              <td className="px-6 py-4">
                <button onClick={()=>AddToCart(product._id)} className={`${style.btn} text-center px-5 py-3 text-xl font-semibold text-black`}>add to cart</button>
              </td>
            </tr>
          </tbody>
          );
        })}



         </table>

       </div>:<div className="w-[95%] mx-auto p-4 my-4 bg-gray-200">
       <p className='text-3xl font-bold capitalize my-4'>my WishList</p>
       </div>}

     </>
  );
}


