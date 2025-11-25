import React from "react";
import apple from "./img/apple.png"
import sony from "./img/sony.png"
import samsung from "./img/samsung.png"
import canon from "./img/canon.png"
import huwa from "./img/huwa.png"
import lenovo from "./img/lenovo.png"

const Brands = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1400px] m-auto px-5">
        <div>
          <div className="border-b-2 border-[#B4B4B4]">
            <h1 className="text-3xl font-[600] pb-4">Top Brands</h1>
          </div>
         <div className="w-full overflow-hidden py-6">
  <div className="flex animate-scroll gap-190">
    
    <div className="flex gap-20">
      <img className="h-12 w-80" src={apple} alt="" />
      <img className="h-12 w-40" src={sony} alt="" />
      <img className="h-12 w-40" src={samsung} alt="" />
      <img className="h-12 w-40" src={canon} alt="" />
      <img className="h-12 w-40" src={huwa} alt="" />
      <img className="h-12 w-40" src={lenovo} alt="" />
    </div>

    <div className="flex gap-20">
      <img className="h-12 w-80" src={apple} alt="" />
      <img className="h-12 w-40" src={sony} alt="" />
      <img className="h-12 w-40" src={samsung} alt="" />
      <img className="h-12 w-40" src={canon} alt="" />
      <img className="h-12 w-40" src={huwa} alt="" />
      <img className="h-12 w-40" src={lenovo} alt="" />
    </div>

  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Brands;
