import React from 'react'
import img1 from "./img/mouse.png"
import klaw from "./img/klawiw.jpg"
import wat from "./img/watches.jpg"
import wat2 from "./img/watch2.png"
import { Link } from 'react-router-dom'

const Blucard = () => {
  return (
     <div className="w-full pt-20">
      <div className="max-w-[1400px] m-auto px-5">
        <div className='p-20 rounded-[10px] pt-10 pb-11 bg-[#053987] flex flex-wrap justify-center gap-8 max-[586px]:pr-10 max-[586px]:pl-10 '>
            <Link to={"/laptop"} className='p-4 bg-white rounded-[5px] w-[258px] relative flex flex-col justify-between hover:scale-105 cursor-pointer transition-all active:scale-101'>
                <div className='pt-4'><p className=' rounded-r-2xl absolute text-[red] p-1 pl-2 left-0 top-3  bg-[#ea50505c]'>-50%</p><img className='w-full' src={img1} alt="" /></div>
                <div className='pt-12'>
                    <p>Logitech G502 Gaming Mouse</p>
                    <div className='flex justify-between items-center pt-3'>
                        <h1>$38.00</h1>
                        <h1>$19.00</h1>
                    </div>
                </div>
            </Link>
             <Link to={"/laptop"} className='p-4 bg-white rounded-[5px] w-[258px] relative flex flex-col justify-between hover:scale-105 cursor-pointer transition-all active:scale-101'>
                <div className='pt-4'><p className=' rounded-r-2xl absolute text-[red] p-1 pl-2 left-0 top-3  bg-[#ea50505c]'>-50%</p><img className='w-full' src={klaw} alt="" /></div>
                <div className='pt-4'>
                    <p>Logitech G502 Gaming Mouse</p>
                    <div className='flex justify-between items-center pt-3'>
                        <h1>$38.00</h1>
                        <h1>$19.00</h1>
                    </div>
                </div>
            </Link>
             <Link to={"/watch"} className='p-4 bg-white rounded-[5px] w-[258px] relative flex flex-col justify-between hover:scale-105 cursor-pointer transition-all active:scale-101'>
                <div className='pt-4'><p className=' rounded-r-2xl absolute text-[red] p-1 pl-2 left-0 top-3  bg-[#ea50505c]'>-50%</p><img className='w-40' src={wat} alt="" /></div>
                <div className='pt-1'>
                    <p>Logitech G502 Gaming Mouse</p>
                    <div className='flex justify-between items-center pt-3'>
                        <h1>$38.00</h1>
                        <h1>$19.00</h1>
                    </div>
                </div>
            </Link>
             <Link to={"/watch"} className='p-4 bg-white rounded-[5px] w-[258px] relative flex flex-col justify-between hover:scale-105 cursor-pointer transition-all active:scale-101'>
                <div className='pt-4'><p className=' rounded-r-2xl absolute text-[red] p-1 pl-2 left-0 top-3  bg-[#ea50505c]'>-50%</p><img className='w-full' src={wat2} alt="" /></div>
                <div className='pt-4'>
                    <p>Logitech G502 Gaming Mouse</p>
                    <div className='flex justify-between items-center pt-3'>
                        <h1>$38.00</h1>
                        <h1>$19.00</h1>
                    </div>
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Blucard