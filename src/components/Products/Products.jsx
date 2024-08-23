import useProducts from '../../Hooks/useProducts'
import Loading from '../Loading/Loading';
import RecentProducts from '../RecentProducts/RecentProducts';
import style from './Products.module.css'
import React from 'react'

export default function Products() {

  let { data, isFetching, isLoading, isError } = useProducts();

  return (
    <>
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
