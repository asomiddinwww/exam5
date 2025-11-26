import React, { useState } from "react";

const faqData = [
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes between 3 to 7 business days depending on your location."
  },
  {
    question: "Can I return an item?",
    answer: "Yes, items can be returned within 30 days as long as they are in original condition."
  },
  {
    question: "Is there a warranty on products?",
    answer: "All electronics purchased have at least a 1-year warranty from the manufacturer."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order using the tracking code sent to your email after purchase."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our customer support is available 24/7 via email and hotline number."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full pt-20 pb-20">
      <div className="max-w-[900px] m-auto px-5">

        <h1 className="text-center text-4xl font-bold mb-10 text-[#1975B9]">
          Frequently Asked Questions
        </h1>

        <div className="space-y-5">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div
                onClick={() => toggle(i)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h2 className="text-lg font-semibold text-[#0c0c0c]">
                  {item.question}
                </h2>

                <span
                  className={`text-[#1975B9] text-2xl transition-transform ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[200px] mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;
