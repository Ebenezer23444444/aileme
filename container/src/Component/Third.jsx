import React from 'react'
import { FaHeadphones, FaMoneyBill, FaRocket, FaUmbrella } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'

function Third() {
  return (
    <div>
        <div className='  lg:text-2x1 md:text-2x1 sm:text-2x1'>
          <p className=' flex gap-20 justify-center bg-slate-200 font-semibold h-[4.5em]'>
            <h1 className=' flex items-center'><FaRocket/>free shipping<br/>
            <h3>30days left</h3>
             </h1>
            <h1 className='flex items-center'><FaMoneyBill/>Money Gurantee</h1>
            <h1 className=' flex items-center'><FaBagShopping/>payment</h1>
            <h1 className=' flex items-center'><FaHeadphones/>online support</h1>
            <h1 className=' flex items-center'><FaUmbrella/>100\sale</h1>
          </p>
        </div>
      
    </div>
  )
}

export default Third
