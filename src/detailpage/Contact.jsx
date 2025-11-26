import { Mail, Map, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full pt-20 pb-20">
      <div className="max-w-[1400px] m-auto px-5">

        {/* TITLE */}
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-[#1975B9] to-[#1FB6CF] text-transparent bg-clip-text">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mt-3 text-lg">
          We’d love to hear from you. Reach out anytime!
        </p>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">

          {/* LEFT TEXT BLOCK */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#1975B9] leading-snug">
              Get in Touch <br /> Anytime, Anywhere
            </h2>
            <p className="text-gray-600 mt-4 text-[17px]">
              Whether you have a question about products, orders, features, or anything else,
              our team is ready to answer all your questions.
            </p>

            {/* CONTACT ICON + INFO */}
            <div className="mt-6 space-y-4">
              <p className="flex items-center gap-3 text-[17px] text-gray-700">
                <Phone className="text-[#1975B9] text-xl" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-3 text-[17px] text-gray-700">
                <Mail className="text-[#1975B9] text-xl" /> support@techheim.com
              </p>
              <p className="flex items-center gap-3 text-[17px] text-gray-700">
                <Map className="text-[#1FB6CF] text-xl" /> 123 Main Street, USA
              </p>
            </div>
          </div>

          {/* MIDDLE GRADIENT CARD */}
          <div className="bg-gradient-to-br from-[#1975B9] via-[#1FB6CF] to-[#B0E9C9] 
                          text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Why Contact Us?</h3>
            <p className="text-white/90 leading-relaxed">
              We're here to provide support, answer questions, and ensure you have a seamless
              experience with our services. Your satisfaction is our top priority.
            </p>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-[#0C0C0C] mb-6">Send a Message</h3>

            <form className="space-y-5">

              <div>
                <label className="text-gray-700 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1975B9] transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1975B9] transition"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1975B9] transition"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1975B9] text-white py-3 rounded-xl hover:bg-[#1663a1] active:bg-[#1975B9] transition font-semibold"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
