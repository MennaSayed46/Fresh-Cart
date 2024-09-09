import style from './MainSlider.module.css'
import React from 'react'
import slide1 from '../../assets/slider-image-3.jpeg'
import slide2 from '../../assets/slider-image-2.jpeg'
import slide3 from '../../assets/slider-image-1.jpeg'
import Slider from 'react-slick'

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true

  };
  return (
    <>

      <div className="w-[95%] mx-auto flex mt-8 ">
        <div className='w-5/6'>
          <Slider {...settings}>
            <img src={slide1} className='w-full h-[400px] ' alt="img of slide1" />
            <img src={slide2} className='w-full  h-[400px] ' alt="img of slide2" />
            <img src={slide3} className='w-full  h-[400px] ' alt="img of slide3" />

          </Slider>


        </div>
        <div className='w-1/5'>
        <img src={slide1}  className='w-full h-[200px]' alt="" />
        <img src={slide3} className='w-full h-[200px]' alt="" />

        </div>
      </div>



    </>
  )
}
