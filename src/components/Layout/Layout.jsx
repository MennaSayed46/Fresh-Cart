import style from './Layout.module.css'
import React from 'react'
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className='pt-14'><Outlet></Outlet></div>
      {/* <Outlet></Outlet> */}
      <Footer />

    </>
  )
}
