import style from './Footer.module.css'
import React from 'react'
import src from '../../assets/freshcart-logo.svg'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>



      <footer className="bg-white dark:bg-gray-900 mt-4 py-4 ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <img src={src} alt="" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to={`https://web.postman.co/`}>Postman collection</Link>
                  </li>
                  <li>
                    <Link to={`https://web.postman.co/workspace/My-Workspace~a80c6257-9fb3-4c30-889e-e539ea8e6145/collection/37563892-ff694b23-4644-4c74-9894-c837c26662e5`}> Documentation</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to={`https://github.com/MennaSayed46`}>Github</Link>
                  </li>
                  <li>
                    <Link to={`https://www.linkedin.com/in/menna-abdelateef-04a0a42b2`}>Linkdin</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <span>Privacy Policy</span>
                  </li>
                  <li>
                    <span>Terms &amp; Conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className=" text-gray-500 sm:text-center dark:text-gray-400">© 2023 FreshCart™. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-3">
              <div className='space-x-2'>
                <i className="fa-brands fa-facebook-f text-gray-500 hover:text-[#0bc70e] dark:hover:text-[#0bc70e]" />
                <i className="fa-brands fa-discord  text-gray-500 hover:text-[#0bc70e] dark:hover:text-[#0bc70e]" />
                <i className="fa-brands fa-x-twitter  text-gray-500 hover:text-[#0bc70e] dark:hover:text-[#0bc70e]" />
                <i className="fa-brands fa-github  text-gray-500 hover:text-[#0bc70e] dark:hover:text-[#0bc70e]" />
                <i className="fa-solid fa-basketball  text-gray-500 hover:text-[#0bc70e] dark:hover:text-[#0bc70e]" />
              </div>


            </div>
          </div>
        </div>
      </footer>





    </>
  )
}
