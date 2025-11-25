import React from 'react'
import showcaseimg from "./img/Showcaseimg.png"

const Showcase = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1400px] m-auto px-5 flex items-center justify-between max-[786px]:flex-col-reverse">
        <div className='flex flex-col gap-13 items-start max-[786px]:items-center max-[786px]:text-center'>
            <h1 className='inter text-[64px] font-[600] max-[500px]:text-4xl'>Tech Heim</h1>
            <p className='inter text-[32px] font-[500] pb-5 max-[500px]:text-[25px]'>"Join the <span className='text-[#F45E0C]'> digital revolution</span>"</p>
            <button className='inter text-[16px] p-3.5 pl-22 rounded-[8px] text-white hover:bg-[#ba4b0fe7] cursor-pointer active:bg-[#F45E0C] pr-22 bg-[#F45E0C] max-[500px]:w-full max-[500px]:text-center max-[500px]:pr-0 max-[500px]:pl-0'>Explore More</button>
        </div>
        <div>
            <img src={showcaseimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Showcase