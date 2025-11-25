import React from "react";
import smart from "./img/smart.png";

const Smart = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1400px] m-auto px-5">
        <div className="linee w-full p-20 flex items-center justify-around rounded-xl bg-[#223949] pb-10 pt-15 max-[688px]:pr-5 max-[688px]:pl-5 max-[688px]:flex-col">
          <div className="flex items-center flex-col gap-3 max-[688px]:text-center max-[688px]:pb-10">
            <h1 className="text-[48px] inter font-[500] text-white">
              SMART WATCH
            </h1>
            <p className="text-[27px] pb-3 text-[white] font-[300]">
              Various designs and brands
            </p>
            <button className="p-2 pl-8 pr-8 inter text-[#223949] hover:text-white cursor-pointer hover:bg-[#ff6851bb] active:bg-[#FF6951] rounded-[7px] bg-[#FF6951]">
              view
            </button>
          </div>
          <div>
            <img className="w-120" src={smart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;
