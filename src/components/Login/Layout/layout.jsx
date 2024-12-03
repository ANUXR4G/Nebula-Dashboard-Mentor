import React from 'react'
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Dashboard from '../Home/dashboard';

function Layout() {

  return (
    <div>
      <ToastContainer/>
      <Dashboard/>
      <div className='lg:ml-[16.5%] lg:mt-[4%]  lg:p-6 mt-20 flex  flex-col justify-center h-full xl:ml-[16.5%] 2xl:ml-[12.5%]'>
      <Outlet/>
      </div>
      </div>
  )
}

export default Layout;