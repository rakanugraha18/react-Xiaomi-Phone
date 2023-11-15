import React from 'react'
import XiaomiBanner from '../components/molecule/Home/XiaomiBanner'
import RedmiBanner from '../components/molecule/Home/RedmiBanner'
import LatestProduct from '../components/molecule/Home/LatestProducts/LatestProducts'
import PhoneLatest from '../components/molecule/Home/LatestProducts/PhoneLatest'



const Home = () => {
  return (
    <div className='flex flex-col max-w-full bg-[#f7f7f7] gap-[15px]'>
     <div id='top-banner' className='w-full flex flex-col gap-[16px]'>
      <XiaomiBanner/>
      <RedmiBanner/>
     </div> 
     <div id='latestproduct' className='max-w-full w-full flex flex-col sm:flex-row sm:space-y-[15px] lg:space-y-[0px] md:space-x-[15px]'>
      <LatestProduct/>
      <PhoneLatest/>
     </div>
    </div>
  )
}

export default Home