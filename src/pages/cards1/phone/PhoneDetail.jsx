import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shop from "../watch/svg/shop.svg";
import very from "../watch/svg/verify.svg";
import tru from "../watch/svg/truck.svg";
import dd from "../watch/svg/dd.png";
import dico from "../watch/svg/dico.svg";
import star from "./Star1.svg";

const PhoneDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState([null]);
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://6924b4f182b59600d721197b.mockapi.io/api/phone/${id}`)
      .then((res) => setUser(res.data))
      .catch((error) => setErr(error.message))
      .finally(() => setLoader(false));
    console.log(id);
  }, [id]);

  if (loader) return <h1>Loading...</h1>;
  if (err) return <h1>Serverda xatolik: {err}</h1>;
  if (!user) return <h1>Maʼlumot topilmadi</h1>;

  return (
    <div className="p-10 pt-40 flex justify-around">
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <img src={user.image} className="w-80" alt="" />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[80px] h-[71px] flex cursor-pointer hover:scale-107">
            <img className="w-full" src={user.imgpage1} alt="" />
          </div>
          <div className="w-[80px] h-[71px] flex cursor-pointer hover:scale-107">
            <img className="w-full" src={user.imgpage2} alt="" />
          </div>
          <div className="w-[80px] h-[71px] flex cursor-pointer hover:scale-107">
            <img className="w-full" src={user.imgpage3} alt="" />
          </div>
          <div className="w-[80px] h-[71px] flex cursor-pointer hover:scale-107">
            <img className="w-full" src={user.imgpage4} alt="" />
          </div>
          <div className="w-[80px] h-[71px] flex cursor-pointer hover:scale-107">
            <img className="w-full" src={user.imgpage5} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
        </div>
        <div className="flex gap-5 items-center">
          <div className="bg-[#053987] text-white p-3 pt-1.5 pb-1.5 rounded-[10px] flex gap-2">
            <img src={star} alt="" />
            <p>{user.stars}</p>
          </div>
          <div>
            <h1 className="text-[18px]">sold 125</h1>
          </div>
        </div>
        <div className="flex gap-9 items-center">
          <div className="flex gap-1.5 items-center text-[#717171]">
            <img src={shop} alt="" />
            <p>In Stock</p>
          </div>
          <div className="flex gap-1.5 items-center text-[#717171]">
            <img src={very} alt="" />
            <p>Guaranteed</p>
          </div>
          <div className="flex gap-1.5 items-center text-[#717171]">
            <img src={tru} alt="" />
            <p>Free Delivery</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <h1 className="text-[18px]">Select color</h1>
          <img src={dd} alt="" />
        </div>
        <div className="flex gap-15">
          <div>
            <ul class="list-disc pl-5 text-gray-600 space-y-2">
              <li>brand</li>
              <li>Model Name </li>
              <li>Screen Size</li>
              <li>Hard Disk Size</li>
              <li>CPU Model</li>
              <li>Ram Memory</li>
            </ul>
          </div>
          <div class="pl-5 space-y-2">
            <p>Apple</p>
            <p>Macbook Pro</p>
            <p>13.3 Inches</p>
            <p>256 GB</p>
            <p>core i5</p>
            <p>8 GB</p>
          </div>
        </div>
      </div>
      <div className="p-10 rounded-[10px] shadow-xl flex flex-col gap-4">
        <div className="flex gap-24 items-center">
          <h1 className="text-[25px] font-[600]">${user.price}</h1>
          <p className="flex text-[20px] font-bold text-[#F45E0C]">
            <img src={dico} alt="" />
            -12%
          </p>
        </div>
        <div>
          <p>last price $ 1410,87</p>
        </div>
        <div className="flex items-center gap-1 text-[20px]">
          <input
            type="radio"
            class="appearance-none w-5 h-5 rounded-full border-2 border-blue-500
           checked:bg-blue-500 checked:border-blue-500"
          />
          Pay Now
        </div>
        <div className="flex items-center gap-1 text-[20px]">
          <input
            type="radio"
            class="appearance-none w-5 h-5 rounded-full border-2 border-blue-500
           checked:bg-blue-500 checked:border-blue-500"
          />
          Buy in installments
        </div>
        <div>
          <p>choose your installments period</p>
        </div>
        <div className="w-full flex gap-2.5 items-center">
          <div className="border-1 border-[#2779F5] p-3 text-center text-[#9E9E9E] rounded-[10px] hover:text-[#0C68F4] hover:border-[#0C68F4] hover:border-2 cursor-pointer">
            <h1 className="text-2xl">3</h1>
            <p>Months</p>
          </div>
          <div className="border-1 border-[#2779F5] p-3 text-center text-[#9E9E9E] rounded-[10px] hover:text-[#0C68F4] hover:border-[#0C68F4] hover:border-2 cursor-pointer">
            <h1 className="text-2xl">3</h1>
            <p>Months</p>
          </div>
          <div className="border-1 border-[#2779F5] p-3 text-center text-[#9E9E9E] rounded-[10px] hover:text-[#0C68F4] hover:border-[#0C68F4] hover:border-2 cursor-pointer">
            <h1 className="text-2xl">3</h1>
            <p>Months</p>
          </div>
          <div className="border-1 border-[#2779F5] p-3 text-center text-[#9E9E9E] rounded-[10px] hover:text-[#0C68F4] hover:border-[#0C68F4] hover:border-2 cursor-pointer">
            <h1 className="text-2xl">3</h1>
            <p>Months</p>
          </div>
        </div>
        <div>
          <button className="p-4 w-full border-2 text-2xl text-[#0C68F4] rounded-2xl hover:bg-[#0C68F4] hover:text-white cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
