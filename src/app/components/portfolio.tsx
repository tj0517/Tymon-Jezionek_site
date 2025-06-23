import Image from "next/image";
import { useState } from 'react';


const opisyStron = [
  {
    tytul: "SEA CLOUDS",
    opis:
      "Strona dla firmy Sea Cloud oferującej szeroką ofertę usług dla branży offshore. Strona stworzona w kreatorze WebWave – rozbudowana wizytówka z wdrożonym elementem sklepu.",
    obrazek: "/s1.png",
    link: "https://example.com/sea-clouds",
  },
  {
    tytul: "ASTRAEUS GYM",
    opis:
      "Przykładowa strona siłowni, utrzymana w nowoczesnym stylu trafiającym do wybranej grupy odbiorców. Z wdrożonym systemem kalendarza zajęć oraz formularza kontaktowego.",
    obrazek: "/s2.png",
    link: "https://example.com/fit-for-you",
  },
  // Dodaj więcej obiektów w razie potrzeby
];


export default function Portfolio() {
  return (
    <div id="playfair" className="bg-gray-600 w-full pt-[100px] pb-[100px]">
      <div className="w-full text-center text-white text-4xl md:text-7xl font-black mb-[100px]">
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
            <div className="text-2xl text-center md: text-left text-4xl font-black">
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
