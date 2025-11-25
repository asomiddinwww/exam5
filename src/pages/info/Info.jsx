import React from 'react'
import icon from './img/icon.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import icon4 from './img/icon4.png'

const Info = () => {
  return (
 <div className="w-full pt-20">
      <div className="max-w-[1400px] m-auto px-5 pb-7">
        <div className='w-full flex flex-wrap gap-10 items-center justify-between max-[500px]:justify-center'>
            <div className='flex items-center gap-4 hover:scale-105 transition-all'><img src={icon} alt="" /><h1 className='text-[20px] text-[#0C0C0C] inter'>Latest and Greatest Tech</h1></div>
            <div className='flex items-center gap-4 hover:scale-105 transition-all'><img src={icon2} alt="" /><h1 className='text-[20px] text-[#0C0C0C] inter'>Guarantee</h1></div>
            <div className='flex items-center gap-4 hover:scale-105 transition-all'><img src={icon3} alt="" /><h1 className='text-[20px] text-[#0C0C0C] inter'>Free Shipping over 1000$</h1></div>
            <div className='flex items-center gap-4 hover:scale-105 transition-all'><img src={icon4} alt="" /><h1 className='text-[20px] text-[#0C0C0C] inter'>24/7 Support</h1></div>
        </div>
      </div>
    </div>
  )
}

export default Info