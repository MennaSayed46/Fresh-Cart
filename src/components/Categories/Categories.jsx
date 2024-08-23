import axios from 'axios';
import style from './Categories.module.css'
import React, { useEffect, useState } from 'react'

export default function Categories() {
  //function of get all categories 

  let [categories, setCategories] = useState([]);

  async function getCategoreis() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    console.log('the data of categories', data.data);

    setCategories(data.data)


  }
  useEffect(() => {
    //the best place to call the api
    getCategoreis();
  }, [])
  return (
    <>
     

      <div className="flex flex-wrap w-[90%] mx-auto mt-5 space-y-2">
        {categories?.map((product, index) => {
          return (
            
            <div className={`w-1/4 py-4 px-3 rounded-md `}>
              <div className={`rounded-md ${style.category}`}>
              <img src={product.image} alt="category img " className='w-full h-[400px] object-cover' />
              <p className='text-center text-[#4fa750] text-2xl font-semibold p-2'>{product.name}</p>

              </div>
             

            </div>

          )
        })}

      </div>



    </>
  )
}
















              