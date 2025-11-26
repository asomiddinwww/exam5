import axios from 'axios';
import React, { useEffect, useState } from 'react'
import star from "../watch/Star.svg"
import { Link } from 'react-router-dom';

const Phone = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [err, setErr] = useState(null)

    useEffect(() => {
        setLoader(true);
        axios
        .get("https://6924b4f182b59600d721197b.mockapi.io/api/phone")
        .then((res) => setData(res.data))
        .catch((err) => setErr(err))
        .finally(() => setLoader(false))
    }, [])

    if (loader) return <h1>Loadingg..</h1>
    if (err) return <h1>serverda xatolik bor!!!</h1>

  return (
   <div className="w-full pt-20 pb-20">
    <div className="border-b-2 border-[#B4B4B4]">
        <h1 className="text-3xl pl-20 font-[600] pb-4">Phone</h1>
        </div>
     <div className="max-w-[1400px] m-auto pt-20 px-5 flex flex-wrap gap-10">
  {data.map((value) => (
    <Link
      to={`/phone/${value.id}`}
      key={value.id}
      className="
        w-[288px] bg-white rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-300 relative group overflow-hidden
      "
    >

      {/* Like Button */}
      <button
        className="
          absolute top-4 right-4 z-10 bg-white shadow-md w-10 h-10 
          rounded-full flex items-center justify-center opacity-80
          hover:opacity-100 hover:scale-110 transition
        "
      >
        ❤️
      </button>

      {/* Image */}
      <div className="w-full h-60 overflow-hidden">
        <img
          className="w-75 object-cover transition-transform duration-300 group-hover:scale-105"
          src={value.image}
          alt=""
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between">

        <h1 className="text-xl font-semibold text-gray-800 leading-tight">
          {value.name}
        </h1>

        <div className="w-full flex items-center justify-between pt-6">

          {/* Price */}
          <h1 className="text-lg font-bold text-[#1975B9]">
            ${value.price}
          </h1>

          {/* Stars */}
          <div className="flex gap-1 items-center">
            <img className="w-5" src={star} alt="" />
            <h1 className="text-gray-700 text-sm">{value.stars}</h1>
          </div>

        </div>
      </div>

    </Link>
  ))}
</div>

    </div>
  )
}

export default Phone;
