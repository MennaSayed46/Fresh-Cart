import Slider from 'react-slick';
import style from './CategorySlider.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function CategorySlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true

  };
  let [category, setCategory] = useState([]);
  async function getCategorySlider() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    // console.log('the data of home',data.data);

    setCategory(data.data)


  }
  useEffect(() => {
    //the best place to call the api
    getCategorySlider();
  }, [])

  return (
    <>
      <Slider {...settings} >


        {category.map((category, index) => (<>
          <div key={index}  >
            <img src={category.image} alt={`image-${index}`} className='w-full  pt-4 h-[400px] object-cover my-4 sm:px-4 md:px-2 xl:px-0' />
            <p className=' pb-4 text-2xl sm:px-4 md:px-2 xl:px-0 text-black text-center font-semibold w-full'>{category.name}</p>
          </div>


        </>


        ))}


      </Slider>

    </>
  )
}
