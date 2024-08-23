import axios from 'axios';
import style from './Brands.module.css'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';

export default function Categories() {
  //function of get all categories 

  let [brands, setBrands] = useState([]);

  async function getBrands() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
    console.log('the data of brands', data.data);

    setBrands(data.data)


  }
  useEffect(() => {
    //the best place to call the api
    getBrands();
  }, [])
  return (

    <>


      {brands ? <div className="flex justify-center flex-wrap w-[90%] mx-auto mt-5 gap-4">
        {brands?.map((product, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 rounded-md">
              <div className={`rounded-md ${style.brands} bg-white p-4 shadow-md`}>
                <img src={product.image} alt="brands img" className="w-full h-auto object-contain" />
                <p className="text-center text-[#4fa750] text-2xl font-semibold p-2">{product.name}</p>
              </div>
            </div>
          );
        })}
      </div> : <div className='flex justify-center items-center h-screen'>
        <Loading />
      </div>}



    </>
  )
}