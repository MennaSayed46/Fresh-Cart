import { BallTriangle } from 'react-loader-spinner'
import style from './Loading.module.css'
import React from 'react'

export default function Loading() {
  return (
    <>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />

    </>
  )
}
