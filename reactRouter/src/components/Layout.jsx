import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet /> 
    {/* Outlet is used to create a layout of your web App i.e header and footer are fixed*/}
    <Footer />
    </>
    
  )
}

export default Layout