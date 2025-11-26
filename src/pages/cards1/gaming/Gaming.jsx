import axios from 'axios';
import React, { useEffect, useState } from 'react'
import star from "../watch/Star.svg"
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Gaming = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [err, setErr] = useState(null)

    useEffect(() => {
        setLoader(true);
        axios
        .get("https://6924b4f182b59600d721197b.mockapi.io/api/gaming")
        .then((res) => setData(res.data))
        .catch((err) => setErr(err))
        .finally(() => setLoader(false))
    }, [])

    if (loader) return <h1>Loadingg..</h1>
    if (err) return <h1>serverda xatolik bor!!!</h1>

  return (
   <div className="w-full pt-30 pb-20">
    <div className="max-w-[1400px] m-auto px-5 flex flex-wrap justify-center gap-10">
  {data.map((value) => (
    <div
      key={value.id}
      className="w-[288px] shadow-xl p-5 rounded-2xl relative bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
    >
      {/* LIKE BUTTON */}
      <button className="absolute top-4 right-4 text-xl text-gray-300 hover:text-red-500 transition-all duration-300">
        <Heart />
      </button>

      <Link to={`/gaming/${value.id}`}>
        <img
          className="h-[200px] w-full object-cover rounded-xl"
          src={value.image}
          alt=""
        />

        <h1 className="font-semibold text-lg pt-3">{value.name}</h1>

        <div className="w-full flex items-center justify-between pt-6">
          <h1 className="font-bold text-xl">${value.price}</h1>

          <div className="flex gap-1 items-center">
            <img className="w-5 h-5" src={star} alt="" />
            <h1 className="font-medium">{value.stars}</h1>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>

    </div>
  )
}

export default Gaming;
