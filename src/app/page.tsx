'use client';

import Image from "next/image";
import FAQ from "./components/faq";
import Portfolio from "./components/portfolio";
import Kontakt from "./components/kontakt";
import Proces from "./components/proces";
import { useState } from "react";


const menuItems = [
  { label: "Portfolio", targetId: "portfolio" },
  { label: "Proces", targetId: "proces" },
  { label: "FAQ", targetId: "faq" },
  { label: "Kontakt", targetId: "kontakt" },
];


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // zamyka menu po kliknięciu
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Sekcja główna z tłem */}
      <div className="relative w-full h-[65vh] sm:h-[80vh] md:h-[95vh] overflow-hidden">
  <Image
    src="/m1.webp"
    alt="tło zdjecie"
    fill
    className="object-cover opacity-80"
  />
  {/* tekst na obrazie */}
  <div
    id="playfair"
    className="absolute  w-full text-center top-[150px] md:top-[175px] font-black text-white px-4"
  >
    <h1 className="text-5xl sm:text-5xl md:text-[100px] leading-tight">
      TYMON<br />JEZIONEK
    </h1>
    <p
      id="poppins"
      className="mt-6 text-base sm:text-lg md:text-[22px] font-light"
    >
      Kompleksowe strony internetowe dla branży sportowej
    </p>
    <a
      href="#kontakt"
      className="mx-auto block w-[200px] sm:w-[220px] md:w-[250px] mt-10 md:mt-[125px] border-2 border-white text-white font-black text-base md:text-[18px] p-3 text-center cursor-pointer hover:bg-white hover:text-black transition"
    >
      NAPISZ JUŻ DZIŚ
    </a>
  </div>
</div>

     {/* Mobilny hamburger */}
     <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menu desktopowe */}
      <div
        id="poppins"
        className="hidden md:flex md:ml-0 md:w-full md:justify-end md:pr-20 pt-7 text-white space-x-10 absolute top-0 font-light md:text-2xl"
      >
        {menuItems.map(({ label, targetId }, i) => (
          <div
            key={i}
            className="hover:underline cursor-pointer"
            onClick={() => scrollToSection(targetId)}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Menu mobilne (dropdown) */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-auto bg-gray-800  bg-opacity-95 p-6 z-40 flex flex-col space-y-4 text-white text-xl font-light py-[50px]">
          {menuItems.map(({ label, targetId }, i) => (
            <div
              key={i}
              className="hover:underline cursor-pointer text-center"
              onClick={() => scrollToSection(targetId)}
            >
              {label}
            </div>
          ))}
        </div>
      )}

    <div id="portfolio">
  <Portfolio />
</div>
<div id="proces">
  <Proces />
</div>
<div id="faq">
  <FAQ />
</div>
<div id="kontakt">
  <Kontakt />
</div>

    </div>
  );
}
