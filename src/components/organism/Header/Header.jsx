import React from 'react'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header
    id="top-site-header"
    className=" bg-contrast text-text px-5 lg:px-6 sticky h-[48px] xl:h-[56px] "
    role="banner"
  >
    <Navbar/>
  </header>
  )
}

export default Header