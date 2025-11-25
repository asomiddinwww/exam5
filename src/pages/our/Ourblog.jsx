import React from "react";
import { Link } from "react-router-dom";
import mete from "./img/meta.jpg";
import bas from "./img/bass.png";
import slif from "./img/slif.jpg";
import data from "./img/data.svg";
import time from "./img/timer.svg";
import save from "./img/save.svg";

const Ourblog = () => {
  return (
    <div className="w-full pt-20 pb-10">
      <div className="max-w-[1400px] m-auto px-5">

        <div className="w-full flex items-center justify-between border-b-2 pb-3 border-[#B4B4B4]">
          <h1 className="text-4xl inter font-[600]">Our Blogs</h1>
          <Link to={"/products"}>View all</Link>
        </div>

        <div className="pt-10 flex flex-col lg:flex-row gap-7">

          <div className="w-full lg:w-[672px] shadow-2xl rounded-2xl">
            <div className="h-[230px] flex">
              <img className="rounded-t-2xl w-full" src={mete} alt="" />
            </div>

            <div className="flex flex-col gap-2 p-4 z-15 bg-white rounded-b-2xl">
              <div className="w-full flex items-center justify-between">
                <p className="text-[#9E9E9E] flex items-center gap-1">
                  <img src={data} alt="" /> August , 8 , 2023
                </p>
                <p className="text-[#9E9E9E] flex items-center gap-1">
                  <img src={time} alt="" /> 3 min read
                </p>
              </div>

              <h1 className="text-[20px] inter font-[500]">
                Meta Platforms plans to release free software that...
              </h1>

              <p className="text-[17px]">
                The parent company of Facebook, Meta <br /> Platforms, is introducing
                software to help de.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">

            <div className="w-full shadow-2xl flex flex-col sm:flex-row justify-between items-start rounded-2xl">
              <div className="h-[210px] w-full sm:w-[350px] flex">
                <img className="rounded-l-2xl w-full" src={bas} alt="" />
              </div>

              <div className="flex flex-col gap-2 p-4 z-15 bg-white rounded-b-2xl w-full">
                <h1 className="pt-5 text-[20px] inter font-[500] text-[#F45E0C]">
                  8 Things You Probably Didn’t Know About Headphones
                </h1>

                <p className="text-[17px] max-w-[552px] text-[#717171]">
                  Owning a headphone could mean a different thing for different people.
                  For some, it act as a fashion statement. It’s easy to spot these people.
                </p>

                <div className="w-full flex items-center justify-between pt-3">
                  <p className="text-[#9E9E9E] flex items-center gap-1">
                    <img src={data} alt="" /> March , 28 , 2023
                  </p>
                  <p className="text-[#9E9E9E] flex items-center gap-1">
                    <img src={save} alt="" />
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full shadow-2xl flex flex-col sm:flex-row justify-between items-start rounded-2xl">
              <div className="h-[210px] w-full sm:w-[350px] flex">
                <img className="rounded-l-2xl w-full" src={slif} alt="" />
              </div>

              <div className="flex flex-col gap-2 p-4 z-15 bg-white rounded-b-2xl w-full">
                <h1 className="pt-5 text-[20px] inter font-[500] text-[#0C0C0C]">
                  Analyzing the August 17th Bitcoin Price Drop
                </h1>

                <p className="text-[17px] max-w-[552px] text-[#717171]">
                  On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8%
                  in a 10-minute window, to a two-month low of under $26k. This pulled
                </p>

                <div className="w-full flex items-center justify-between pt-3">
                  <p className="text-[#9E9E9E] flex items-center gap-1">
                    <img src={data} alt="" /> March , 17 , 2023
                  </p>
                  <p className="text-[#9E9E9E] flex items-center gap-1">
                    <img src={save} alt="" />
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Ourblog;
