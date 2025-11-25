import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoader(true);
    axios
      .get("https://69245b583ad095fb8473e105.mockapi.io/user/users")
      .then((res) => setData(res.data))
      .catch((err) => setErr(err))
      .finally(() => setLoader(false));
  }, []);

  if (loader) return <h1>Loading..</h1>;
  if (err) return <h1>Errorrrr</h1>;

  return (
    <div className="w-full pt-20">
      <div className="max-w-[1400px] m-auto px-5 flex flex-wrap justify-between max-[600px]:justify-center gap-3">
        {data.map((item) => (
          <Link to={`/${item.page}`}
            key={item.id}
            className="shadow-xl/20 pl-4 pt-10 pb-10 rounded-2xl pr-4 text-center flex flex-col justify-between gap-1 items-center"
          >
            <div className="w-[184px] h-[154px] flex flex-col justify-center items-center">
              <img className="h-[154px]" src={item.image} alt={item.title} />
            </div>
            <h1 className="pt-1">{item.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
