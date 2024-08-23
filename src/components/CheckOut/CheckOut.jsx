import { useNavigate } from 'react-router-dom';
import style from './CheckOut.module.css'
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { useFormik } from 'formik';
import { CartContext } from '../Context/CartContext';

export default function CheckOut() {

  let { checkOutSession } = useContext(CartContext);

  async function checkOutValues(values) {
    let response = await checkOutSession(values);
    console.log('response of check values ', response);
    if (response.status == 'success') {
      console.log('succc');

      window.location.href = response.session.url;

    }

  }




  let [loadingSpinner, setloadingSpinner] = useState(false);
  let { setUserData } = useContext(UserContext);


  async function CheckForm(values) {
    console.log('the values of login ', values);
    try {
      setloadingSpinner(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values);
      console.log('the data of checkout', data);
      localStorage.setItem('userToken', data.token);
      setloadingSpinner(false);
      console.log('succcess log');
      setUserData(data.token);



    } catch (err) {

      setloadingSpinner(false);
    }

  }



  let formik = useFormik({
    initialValues: {

      "details": " ",
      "phone": " ",
      "city": " ",
    },
    onSubmit: CheckForm


  })

  return (
    <>

      <form onSubmit={formik.handleSubmit} className="max-w-md h-screen flex flex-col items-center justify-center mx-auto ">
        <h1 className='capitalize pb-14 font-semibold text-2xl text-center '> fill out the form to confirm your reservation </h1>

        <div className="relative z-0 w-full mb-5 group">
          <input value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
          <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">Details</label>

        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">Phone</label>

        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
          <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl">City</label>

        </div>

        <button onClick={() => checkOutValues()} type='submit' className='bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm  sm:w-auto px-6 py-3 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 '>Submit</button>

      </form>


    </>
  )
}
