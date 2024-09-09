import axios from 'axios'
import style from './Home.module.css'
import React, { useContext, useEffect, useState } from 'react'
import RecentProducts from '../RecentProducts/RecentProducts';
import Loading from '../Loading/Loading';

import CategorySlider from './../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import { useQuery } from '@tanstack/react-query';


export default function Home() {
  // let [products, setproducts] = useState([]);

  // async function getRecentProducts() {
  //   let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  //   // console.log('the data of home',data.data);

  //   setproducts(data.data)


  // }
  // useEffect(() => {
  //   //the best place to call the api
  //   getRecentProducts();
  // }, [])




  function getproducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);

  };

  let { data, isFetching, isLoading, isError } = useQuery({
    queryKey: ['recentproducts'],
    queryFn: getproducts,
    refetchOnMount: false
  });


  // let [products,setProducts]=useState([]);
  // setProducts(data.data);
  
  
 
 


  return (
    <>
      <MainSlider />
      <CategorySlider />
   
      {!isLoading ? <div className="mx-auto my-5">
        <div className="flex flex-wrap justify-center items-center ">
          {data.data.data.map((product, index) =>
            <RecentProducts key={index} product={product} />
          )}
        </div>
      </div> : <div className='flex justify-center items-center h-screen'>
        <Loading />
      </div>}

    </>
  )
}
