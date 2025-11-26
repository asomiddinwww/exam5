import axios from 'axios';
import React, { useEffect, useState } from 'react'
import star from "../watch/Star.svg"
import { Link } from 'react-router-dom';

const Laptop = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [err, setErr] = useState(null)

    useEffect(() => {
        setLoader(true);
        axios
        .get("https://6924dc0982b59600d72199d4.mockapi.io/api/laptop")
        .then((res) => setData(res.data))
        .catch((err) => setErr(err))
        .finally(() => setLoader(false))
    }, [])

    if (loader) return <h1>Loadingg..</h1>
    if (err) return <h1>serverda xatolik bor!!!</h1>

  return (
   <div className="w-full pt-30 pb-20">
    <div className="border-b-2 border-[#B4B4B4]">
        <h1 className="text-3xl pl-20 font-[600] pb-4">Laptop</h1>
        </div>
   <div className="max-w-[1400px] m-auto px-5 pt-20 flex flex-wrap gap-10 justify-center">
  {data.map((value) => (
    <Link
      to={`/laptop/${value.id}`}
      key={value.id}
      className="
        w-[288px] bg-white rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-300 group relative overflow-hidden
        flex flex-col justify-between p-5
      "
    >
      {/* LIKE BUTTON */}
      <button
        className="
          absolute top-4 right-4 bg-white shadow-md w-10 h-10 rounded-full
          flex items-center justify-center z-10 opacity-80
          hover:opacity-100 hover:scale-110 transition
        "
      >
        ❤️
      </button>

      {/* IMAGE */}
      <div className="w-full h-56 flex items-center justify-center overflow-hidden">
        <img
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={value.image}
          alt=""
        />
      </div>

      {/* CONTENT */}
      <div className="pt-4 flex flex-col justify-between">

        {/* NAME */}
        <h1 className="text-[20px] font-semibold text-gray-800 leading-tight">
          {value.name}
        </h1>

        {/* PRICE + STARS */}
        <div className="w-full flex items-center justify-between pt-6">

          <h1 className="text-lg font-bold text-[#1975B9]">
            ${value.price}
          </h1>

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

export default Laptop;
