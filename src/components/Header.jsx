import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoimg from "./img/logo.png";
import likeicon from "./img/heart.svg";
import shopicon from "./img/bag.svg";
import usericon from "./img/user.svg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Blog", to: "/blog" },
    { name: "FAQ", to: "/faq" },
    { name: "ContactUs", to: "/contact" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">
      <div className="max-w-[1400px] m-auto px-5">
        <div className="w-full flex items-center pt-3 pb-3 justify-between">

          {/* Logo */}
          <div>
            <img className="w-12" src={logoimg} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 font-Inter text-[17.5px]">
              {links.map((l) => (
                <NavLink
                  key={l.name}
                  to={l.to}
                  className={({ isActive }) =>
                    `relative py-1.5 px-1 cursor-pointer 
                     ${isActive ? "text-[#0C68F4]" : "text-black"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <li>{l.name}</li>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#0C68F4] transition-all ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex gap-4 items-center max-[636px]:hidden">
            <img className="cursor-pointer hover:scale-110" src={likeicon} />
            <img className="cursor-pointer hover:scale-110" src={shopicon} />
            <img className="cursor-pointer hover:scale-110" src={usericon} />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-white shadow-lg transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <X size={30} className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        <ul className="flex flex-col gap-6 text-[18px] pl-6 pt-4 font-Inter">
          {links.map((l) => (
            <NavLink
              key={l.name}
              to={l.to}
              className={({ isActive }) =>
                `cursor-pointer ${isActive ? "text-[#0C68F4]" : "text-black"}`
              }
              onClick={() => setOpen(false)}
            >
              {l.name}
            </NavLink>
          ))}
        </ul>

        <div className="flex gap-6 px-6 mt-10">
          <img className="cursor-pointer w-6" src={likeicon} />
          <img className="cursor-pointer w-6" src={shopicon} />
          <img className="cursor-pointer w-6" src={usericon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
