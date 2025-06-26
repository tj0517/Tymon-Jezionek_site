import Image from "next/image";
import { useState } from 'react';


const Opisy = [
  {
    tytul: "KONTAKT",
    opis:
      "Po otrzymaniu wiadomośći, postaramy sie dokłanie zapoznać z oczekiwaniami.",
  },
  {
    tytul: "PROJEKT",
    opis:
      "W dalszym etapie stworzymy graficzny projekt strony.",
  },
  {
    tytul: "REALIZACJA",
    opis:
      "Po akceptacji projketu, przejdziemy do tworzenia strony."
  },
  {
    tytul: "ODDANIE",
    opis:
      "Po końcu relizacji strona trafia w ręce klienta, a my pozostajemy w kontakcie w celu wsparcia technicznego.",
  },
];
  
  
  export default function Proces() {
      return(

<div className="bg-gray-800 w-full py-[75px] md:py-[125px] flex flex-col">
<div id="playfair" className="w-full text-center text-white text-4xl mb-[50px] md:text-7xl font-black md:mb-[100px]">
        PROCES
      </div>
      <div className="w-[95%] ml-[2.5%] px-4 flex flex-col items-center">
  <svg
    viewBox="0 0 100 20"
    preserveAspectRatio="xMidYMid meet"
    className="w-[90%] h-auto overflow-visible"
  >
  
    <line x1="5" y1="15" x2="95" y2="15" stroke="#ccc" strokeWidth="0.5" />
    {[5, 35, 65, 95].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="15" r="1.25" fill="#E6F9FF" />
        <text
          x={x}
          y="10"
          textAnchor="middle"
          fontSize="7"
          fontFamily="playfair"
          fontWeight={200}
          fill="#cccccc"
        >
          0{i + 1}
        </text>
      </g>
    ))}
  </svg>

</div>


  {/* Teksty pod punktami */}
  <div className="w-[95%] ml-[2.5%] flex justify-between text-center text-white">
    {Opisy.map(({ tytul, opis }, i) => (
      <div key={i} className="max-w-[20%]">
        <div id="playfair" className=" text-[10px] font-bold sm:text-lg md:text-3xl ">{tytul}</div>
        <div id="poppins" className=" font-light mt-[10px]  text-[8px] sm:text-[12px] sm:mt-[15px] md:text-[18px] text-gray-400 md:mt-[20px]" >{opis}</div>
      </div>
    ))}
  </div>







    


</div>
 )}