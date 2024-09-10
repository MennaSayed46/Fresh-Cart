import { Link } from 'react-router-dom'
import style from './RecentProducts.module.css'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function RecentProducts({ product }) {
  let { AddToCart } = useContext(CartContext);
  let { addToWishList } = useContext(CartContext);
  let { removeFromWishList } = useContext(CartContext);

  let [wishList, setwishList] = useState(false);

  //add to wishlist function

  async function AddWishlist(productId) {
    setwishList(true)
    let response = await addToWishList(productId);
    // setCart(response.data);


  }
  //remove from wishlist function
  async function removeWishList(productId) {
    setwishList(false);
    let response = await removeFromWishList(productId);
    // setCart(response.data);



  }
  return (
    <>


      <div className={`md:w-1/6 mx-4 my-2 sm:w-1/3 space-y-6 p-4 rounded-md relative ${style.product}`}>
        <Link to={`productdetails/${product.id}`}>
          <div>
            <img src={product.imageCover} className='w-full' alt="img of product" />
            <p className='text-xl  text-[#0bc70e]'>{product.category.name}</p>
            <p className='text-xl mt-2 font-semibold mb-3'>{product.title.split(' ').splice(0, 2).join(' ')}</p>
          </div>
          <div className="flex justify-between">
            <p className='text-xl'>{product.price} EGP</p>
            <p className='text-xl'><i className="fa-solid fa-star text-yellow-400"></i>{product.ratingsAverage}</p>

          </div>
        </Link>
        <div className='flex justify-end wishlistContainer'>



          <button onClick={() => wishList ? removeWishList(product.id) : AddWishlist(product.id)}> <i className={`fa-solid fa-heart text-2xl ${wishList ? 'text-red-500' : 'text-black'}`}></i></button>

        </div>





        <button onClick={() => AddToCart(product.id)} className={`add bg-[#4fa750] py-3 rounded-md w-full text-white  text-center ${style.btn}`}> + Add</button>

      </div>

    </>
  )
}
