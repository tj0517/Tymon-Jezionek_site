import Image from "next/image";
import { useState } from 'react';


const opisyStron = [
  {
    tytul: "SEA CLOUDS",
    opis:
      "Strona dla firmy Sea Cloud oferującej szeroką ofertę usług dla branży offshore. Strona oparta na technologi next.js, gwarantującej szybkie ładowanie i responsywność na różnych urządzeniach. Z wdrożonym systemem Obsługi kontaktu mailowego oraz komponentem serwującym artykuły blogowe.",
    obrazek: "/s1.png",
    link: "https://sea-clouds.eu/",
  },
  {
    tytul: "ASTRAEUS GYM",
    opis:
      "Przykładowa strona siłowni, utrzymana w nowoczesnym stylu trafiającym do wybranej grupy odbiorców. Strona oparta na technologi next.js, jest przykładowym projektem designu jaki moge zaoferować dla klubów z brany sportowej.",
    obrazek: "/s2.png",
    link: "https://gym-azure-nine.vercel.app",
  },
  // Dodaj więcej obiektów w razie potrzeby
];


export default function Portfolio() {
  return (
    <div id="playfair" className="bg-gray-600 w-full pt-[100px] pb-[100px]">
      <div className="w-full text-center text-white text-5xl mb-[50px] md:text-7xl font-black md:mb-[100px]">
        PORTFOLIO
      </div>

      {opisyStron.map((strona, idx) => (
        <div
          key={idx}
          className="w-[90%] md:w-[75%] mx-auto mt-[60px] md:mt-[100px] pt-[30px] md:pt-[50px] flex flex-col md:flex-row justify-between gap-8"
        >
          <div className="relative w-full md:w-[45%] overflow-hidden rounded-2xl">
            <Image
              src={strona.obrazek}
              alt={`Tło zdjęcie ${idx + 1}`}
              width={2490}
              height={1681}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div
            id="poppins"
            className="flex flex-col justify-between text-white w-full md:w-[50%]"
          >
            <div className="text-2xl text-center md:text-left md:text-4xl font-black">
              {strona.tytul}
            </div>
            <div className="text-[14px] md:text-[16px] font-light mt-4 md:mt-0">
              {strona.opis}
            </div>
            <a
              href={strona.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] border text-white border-white p-[15px] mt-6 md:mb-[10px] font-black w-full md:w-[40%] text-center rounded-[5px] transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer block"
            >
              ZOBACZ STRONĘ
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
