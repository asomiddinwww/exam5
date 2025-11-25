import React from 'react'
import phone from "./img/phone.png"
import plas from "./img/plas.png"

const ListsCard = () => {
  return (
   <div className="w-full pt-20">
  <div className="max-w-[1400px] m-auto px-5">
    <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
      
      <div className="w-full lg:w-[840px] flex flex-col md:flex-row p-6 md:p-10 bg-gradient-to-r from-[#1975B9] via-[#1FB6CF] to-[#B0E9C9] rounded-xl">

        <div className="flex flex-col items-center md:items-start">
          <h1 className="pl-0 md:pl-8 inter text-[26px] sm:text-[30px] font-[600]">
            Iphone <span className="text-white">15 Series</span>
          </h1>

          <img className="w-[250px] sm:w-[300px] md:w-[380px] lg:w-[400px]" src={phone} alt="" />
        </div>

        <div className="flex flex-col items-center md:items-center mt-6 md:mt-0 md:ml-auto">

          <div className="flex items-center gap-3 sm:gap-5 pb-7 flex-wrap justify-center">
            <div className="p-4 pb-1 pt-1 border-2 text-center rounded-[10px]"><h1>8</h1><p>day</p></div>
            <div className="p-4 pb-1 pt-1 border-2 text-center rounded-[10px]"><h1>8</h1><p>day</p></div>
            <div className="p-4 pb-1 pt-1 border-2 text-center rounded-[10px]"><h1>8</h1><p>day</p></div>
            <div className="p-4 pb-1 pt-1 border-2 text-center rounded-[10px]"><h1>8</h1><p>day</p></div>
          </div>

          <h1 className="text-[22px] sm:text-[25px] font-[600] inter text-center md:text-left">
            It feels good to be the first
          </h1>

          <p className="inter max-w-[258px] pb-8 pt-3 text-center md:text-left">
            Get ready for the future of smartphones. Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.
          </p>

          <button className="pb-3 pt-3 px-10 bg-[#0C68F4] rounded-[7px] text-white hover:bg-[#0c69f4a8] active:bg-[#0C68F4]">
            Register Now
          </button>
        </div>
      </div>

      <div className="bg w-full lg:w-[490px] bg-[#00568f] rounded-xl flex flex-col items-center p-8 md:p-10">
        <h1 className="inter text-[26px] sm:text-[30px] font-[500] text-[#FCC870] pb-8">
          Play Station 5
        </h1>

        <img className="w-40 sm:w-52 pb-10" src={plas} alt="" />

        <button className="bg-[#0C68F4] rounded-[7px] text-white inter px-10 py-3 hover:bg-[#0c69f49f] active:bg-[#0C68F4]">
          Buy Now
        </button>
      </div>

    </div>
  </div>
</div>

  )
}

export default ListsCard