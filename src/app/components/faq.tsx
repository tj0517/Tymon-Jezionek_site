import { useState } from "react";

const faqs = [
  {
    question: "W jakim czasie realizujemy strony?",
    answer: "Zazwyczaj cały proces trwa od 7 do 14 dni roboczych, w zależności od stopnia skomplikowania projektu.",
  },
  {
    question: "Czy mogę wprowadzać zmiany po zakończeniu projektu?",
    answer: "Tak, oferujemy możliwość aktualizacji oraz wsparcie techniczne po zakończeniu projektu.",
  },
  {
    question: "Czy wykonujecie strony w oparciu o WordPress?",
    answer: "Specjalizujemy się głównie w stronach typu headless (Next.js), ale na życzenie klienta tworzymy też projekty w WordPressie.",
  },
  {
    question: "Czy projekt zawiera SEO?",
    answer: "Optymalizacja SEO jest dostępna po odpowiednich ustaleniach.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 bg-gray-700 text-white">
      <div id="playfair" className="w-full text-center text-white text-4xl mb-[50px] md:text-7xl font-black md:mb-[100px]">
        FAQ
      </div>

      <div className="w-[90%] md:w-[60%] mx-auto space-y-8">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          const anotherActive = activeIndex !== null && !isActive;

          return (
            <div
              key={index}
              className={`border border-white rounded-t-[8px] overflow-hidden ${
                isActive ? "bg-white text-black" : "text-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`
                  w-full flex justify-between items-center px-6 py-4 text-left font-semibold focus:outline-none
                  ${!anotherActive ? "transition-colors duration-300 hover:bg-white hover:text-black" : ""}
                `}
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {isActive && (
                <div className="px-6 pb-6 text-[16px] font-light transition-opacity duration-300 mt-5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

