import axios from 'axios';
import React, { useEffect, useState } from 'react'
import star from "../watch/Star.svg"
import { Link } from 'react-router-dom';

const Camera = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [err, setErr] = useState(null)

    useEffect(() => {
        setLoader(true);
        axios
        .get("https://6924dc0982b59600d72199d4.mockapi.io/api/camera")
        .then((res) => setData(res.data))
        .catch((err) => setErr(err))
        .finally(() => setLoader(false))
    }, [])

    if (loader) return <h1>Loadingg..</h1>
    if (err) return <h1>serverda xatolik bor!!!</h1>

  return (
   <div className="w-full pt-30">
      <div className="max-w-[1400px] m-auto px-5 flex flex-wrap justify-between gap-10 justify-center">
        {data.map((value) => (
            <Link 
                to={`/camera/${value.id}`} 
                className='w-[288px] shadow-2xl p-5 rounded-2xl flex flex-col justify-between' 
                key={value.id}
            >
                <img className='w-full' src={value.image} alt="" />
                <div>

                <h1 className='text-2xl font-[600]'>{value.name}</h1>

                <div className='w-full flex items-center justify-between pt-10'>
                    <h1>${value.price}</h1>

                    <div className='flex gap-1 items-center'>
                        <img src={star} alt="" />
                        <h1>{value.stars}</h1>
                    </div>
                </div>
                </div>

            </Link>
        ))}
      </div>
    </div>
  )
}

export default Camera;
