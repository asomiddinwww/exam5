import axios from "axios";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import Watch from "../cards1/watch/Watch";

const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState("silver");

const colors = [
  { name: "black", bg: "bg-gray-900" },
  { name: "silver", bg: "bg-gray-200" },
  { name: "gold", bg: "bg-amber-200" },
];
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://6924e80382b59600d721c1a5.mockapi.io/api/newproduct/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => setErr(err))
      .finally(() => setLoader(false));
  }, [id]);

  if (loader) return <h1>Loader...</h1>;
  if (!user) return <h2>erorreororoeroeorere</h2>;

  return <div> <div className="pt-25 max-w-[1400px] m-auto px-5">
    <div className="border-b-2 border-[#B4B4B4]">
        <h1 className="text-3xl font-[600] pb-4">New Products</h1>
        </div>
  <div>
     <div className="flex pt-10 flex-wrap justify-between items-center gap-5 pb-10">
              <div className="flex items-center justify-center">
                <div className="bg-white flex flex-col items-center rounded-2xl shadow-2xl p-4 max-w-xs w-full hover:scale-103 transition-all cursor-pointer hover:text-[#063A88]">
                    <div className="flex ">
                  <div className=" rounded-xl">
                    <img
                      src={user.image}
                      alt="iPhone 14 Pro Max"
                      className="w-full h-56 object-contain"
                    />
                  </div>

                  <div className="flex items-center flex-col justify-center gap-2 mb-4">
                    {colors.map((color) => (
                      <button
                        key={color.name}
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
                    {user.name}
                  </h2>

                  <div className="flex w-full items-center justify-between">
                    <div className="text-xl font-semibold text-gray-900">
                      ${user.price}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                      <span className="text-blue-600 font-medium text-sm">
                        {user.stars}
                      </span>
                    </div>
                  </div>
                    </div>
                </div>
              </div>
          </div>
  </div>

  </div>
  </div>
};

export default ProductDetail;
