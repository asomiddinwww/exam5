import { ArrowBigDown, ArrowBigUp, Locate, Mail, Phone, Upload } from "lucide-react";
import pay from "./img/paypal.png" 
import amer from "./img/american.png" 
import vis from "./img/visa.png" 
import mas from "./img/master.png" 

export default function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="inter w-full bg-gradient-to-b from-[#0B1C3E] to-[#001C3A] text-white px-6 pb-6 md:px-20 py-10">

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {["about us", "blog", "returns", "order status"].map((item) => (
              <li
                key={item}
                className="hover:opacity-100 hover:translate-x-1 transition-all text-[16px] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Info</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {["How it works?", "our promises", "FAQ"].map((item) => (
              <li
                key={item}
                className="hover:opacity-100 hover:translate-x-1 transition-all text-[16px] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact us</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="hover:opacity-100 transition-all flex items-center gap-1 cursor-pointer text-[16px]">
              <Locate className=""/> 123 Main Street, Anytown, USA
            </li>
            <li className="hover:opacity-100 transition-all flex items-center gap-1 cursor-pointer text-[16px]">
              <Phone className=""/> +1 (555) 123-4567
            </li>
            <li className="hover:opacity-100 transition-all flex items-center gap-1 cursor-pointer text-[16px]">
              <Mail className=""/> TechHeimSupport@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Sign up for News and updates</h3>

          <div className="flex items-center border border-white/40 rounded-xl px-4 py-2 mb-6 transition-all hover:border-white">
            <input
              type="text"
              placeholder="E-mail Address"
              className="bg-transparent outline-none text-sm flex-1 placeholder-white/60"
            />
            <span className="text-xl cursor-pointer hover:translate-x-1 transition-all">
              {">"}
            </span>
          </div>

          <div className="flex space-x-4 text-2xl">
            {["facebook", "twitter", "instagram", "youtube"].map((icon) => (
              <i
                key={icon}
                className={`fab fa-${icon} cursor-pointer hover:scale-110 hover:text-white transition-all`}
              ></i>
            ))}
          </div>
        </div>
      </div>

        <div className="flex items-center space-x-1 pt-15 pb-2">
          <img src={pay} className="h-6 opacity-80 hover:opacity-100 transition-all" />
          <img src={amer} className="h-6 opacity-80 hover:opacity-100 transition-all" />
          <img src={vis} className="h-6 opacity-80 hover:opacity-100 transition-all" />
          <img src={mas} className="h-6 opacity-80 hover:opacity-100 transition-all" />
        </div>
      <div className="mt-0 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">


        <p className="mt-4 md:mt-0">© 2023 Tech Heim.</p>

        <div className="flex space-x-6 text-sm mt-4 md:mt-0">
          {["cookie settings", "Privacy Policy", "Terms and Conditions", "Imprint"].map((txt) => (
            <span key={txt} className="cursor-pointer hover:opacity-100 hover:underline transition-all">
              {txt}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={scrollTop}
        className="fixed right-6 bottom-6 bg-[#accbfa] backdrop-blur-md hover:bg-[#accbfa] text-white p-3 pl-3 pr-3 outline-0 rounded-full transition-all"
      >
        <ArrowBigUp/>
      </button>
    </footer>
  );
}
