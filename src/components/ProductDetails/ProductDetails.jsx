
import { useParams } from 'react-router-dom';
import style from './ProductDetails.module.css';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Loading from '../Loading/Loading';
import { CartContext } from '../Context/CartContext';

export default function ProductDetails() {
  let { AddToCart } = useContext(CartContext);
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true

  };
  async function getProductDetails(id) {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      setProduct(data.data);
    } catch (error) {
      console.error("Error of productdetails:", error);
    }
  }

  useEffect(() => {

    getProductDetails(id);

  }, [id]);

  return (
    <>
      {product ? <div className="mx-auto w-5/6 flex justify-center flex-wrap items-center my-10  pt-14 ">
        <div className="w-1/4 px-4">

          <Slider {...settings}>


            {product && product.images.map((img, index) => (<img src={img} key={index} alt={`image-${index}`} className='w-full' />))}


          </Slider>
        </div>
        <div className="w-3/4 p-4">
          <h2 className='text-gray-800'>{product && product.title}</h2>
          <p className="my-6 text-gray-500">{product && product.description}</p>
          <p className="text-gray-800">{product && product.category.name}</p>
          <p className="my-2 text-gray-800">{product && product.price} EGP</p>
          <button onClick={()=>AddToCart(product.id)} className={`bg-green-700 rounded-md w-full text-center text-white  ${style.btn}`}>Add to cart</button>



        </div>
      </div> : <div className='flex justify-center items-center h-screen'>
        <Loading />
      </div>}
    </>
  );
}

