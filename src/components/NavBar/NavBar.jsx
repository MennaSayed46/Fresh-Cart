import style from './NavBar.module.css'
import React, { useContext } from 'react'
import logoSrc from '../../assets/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
export default function NavBar() {
  let { UserData, setUserData } = useContext(UserContext);
  let { cartItems } = useContext(CartContext);
  console.log('cartitems', cartItems);

  let navigate = useNavigate();

  function LogOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/LogIn');

  }

  return (
    <>
      <nav className='bg-gray-200 py-4 capitalize text-slate-600 md:fixed top-0 inset-x-0 z-30  '>
        <div className="container flex flex-col md:flex-row justify-between mx-auto items-center">
          <div className="flex flex-col md:flex-row items-center space-x-3  ">
            <img src={logoSrc} alt="LogoSrc" />
            {UserData && <ul className='flex flex-col md:flex-row items-center space-x-2'>
              <li className='text-xl'><NavLink to='/home'>Home</NavLink></li>
              <li className='text-xl'><NavLink to='/cart'>Cart</NavLink></li>
              <li className='text-xl'><NavLink to='/products'>Products</NavLink></li>
              <li className='text-xl'><NavLink to='/categories'>Categories</NavLink></li>
              <li className='text-xl'><NavLink to='/wishlist'>WishList</NavLink></li>
              <li className='text-xl'><NavLink to='/brands'>Brands</NavLink></li>

            </ul>}


          </div>

          <div className="flex flex-col md:flex-row items-center space-x-3 ">

            <ul className='flex flex-col md:flex-row items-center space-x-2'>
              <li className='space-x-2 text-black text-xl'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
              </li>


              <li className='relative'>
                <NavLink to={`/cart`}><i className="fa-solid fa-cart-shopping text-[#4fa750] text-4xl"></i></NavLink>
                <span className={`absolute top-[-5px] right-[8px] font-sm text-white text-xl font-semibold`}>{cartItems?.numOfCartItems}</span>
              </li>


              {UserData ? <li className='text-xl'><NavLink to='login' onClick={() => LogOut()}>Logout</NavLink></li> : <>
                <li className='text-xl'><NavLink to='login'>Login</NavLink></li>
                <li className='text-xl'><NavLink to='register'>Register</NavLink></li>
              </>}












            </ul>
          </div>


        </div>

      </nav>

    </>
  )
}
