import axios from "axios";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard3 = () => {
  const [selectedColor, setSelectedColor] = useState("silver");
  const colors = [
    { name: "black", bg: "bg-gray-900" },
    { name: "silver", bg: "bg-gray-200" },
    { name: "gold", bg: "bg-amber-200" },
  ];
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoader(true);
    axios
      .get("https://6924e80382b59600d721c1a5.mockapi.io/api/newproduct")
      .then((res) => setData(res.data))
      .catch((err) => setErr(err))
      .finally(() => setLoader(false));
  }, []);

  if (loader) return <h1 className="pl-10">Loadingg..</h1>;
  if (err) return <h1>muammo bor apida</h1>;
  return (
    <>
      <div className="w-full pt-20">
        <div className="max-w-[1400px] m-auto px-5">
          <div className="w-full flex items-center justify-between pb-10">
            <h1 className="text-4xl font-[600]">Best Sellers</h1>
            <Link to="/products">View all</Link>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-5 pb-10">
            {data.map((item) => (
              <div className="flex items-center justify-center">
                <Link to={`/ProductCard3/${item.id}`} className="bg-white flex flex-col items-center rounded-2xl shadow-2xl p-4 max-w-xs w-full hover:scale-103 transition-all cursor-pointer hover:text-[#063A88]">
                    <div className="flex ">
                  <div className=" rounded-xl">
                    <img
                      src={item.image2}
                      alt="iPhone 14 Pro Max"
                      className="w-full h-56 object-contain"
                    />
                  </div>

                  <div className="flex items-center flex-col justify-center gap-2 mb-4">
                    {colors.map((color) => (
                      <button
                        key={color.name2}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-3 h-3 rounded-full ${color.bg} ${
                          selectedColor === color.name
                            ? "ring-2 ring-offset-2 ring-gray-400"
                            : ""
                        }`}
                      />
                    ))}
                    <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                      +
                    </div>
                  </div>

                    </div>
                    <div className="w-full flex flex-col gap-4">
                  <h2 className="text-base text-gray-800 mb-3">
                    {item.name2}
                  </h2>
                  <div className="flex w-full items-center justify-between">
                    <div className="text-xl font-semibold text-gray-900">
                      {item.price2}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                      <span className="text-blue-600 font-medium text-sm">
                        {item.stars2}
                      </span>
                    </div>
                  </div>
                    </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard3;
