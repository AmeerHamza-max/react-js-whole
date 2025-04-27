import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router'
import Loading from './Loading'

const Layout = () => {
  const navigation=useNavigation();
  if(navigation.state==="loading") return <h1><Loading /></h1>
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
