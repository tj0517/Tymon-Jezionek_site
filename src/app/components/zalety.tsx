import Image from "next/image";
import { useState } from 'react';


const zalety = [
    {
      title: "Responsywne strony",
      description: "Twoja strona działa idealnie na komputerze, tablecie i telefonie.",
      d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    },
    {
      title: "Optymalizacja SEO",
      description: "Twoja strona dostosowana pod kątem algorytmów google aby dotarła do twojej grupy odbiorców.",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    },
    {
      title: "Znana grupa odbiorców",
      description: "Dzięki działaniu w niszy sportowej, znamy dokładnie wymagania grupy odbiorców.",
      d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
    },
  ];
  
  
  export default function Zalety() {
      return(

<div className="bg-gray-800 w-full py-[125px] flex flex-col">
  <div id="playfair" className="w-full text-center text-white text-4xl md:text-7xl font-black mb-[100px]">
    CO WYRÓŻNIA <br></br> NASZE STRONY
  </div>

  <div className="w-[80%] mx-auto flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-8">
    {zalety.map((feature, index) => (
      <div
        key={index}
        className="group relative flex items-center justify-center text-center px-6 py-16 w-full sm:w-[45%] lg:w-[30%] border border-white rounded-[9px] text-white hover:bg-white transition-all duration-300 overflow-hidden"
      >
        <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[30%] mb-6 text-white group-hover:text-black transition-colors duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={feature.d} />
          </svg>
          <h3 className="text-xl font-semibold text-white group-hover:text-black transition-colors duration-300">
            {feature.title}
          </h3>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-black text-xl opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300 px-6">
          {feature.description}
        </div>
      </div>
    ))}
  </div>
</div>

      )}