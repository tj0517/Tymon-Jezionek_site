'use client';

import Image from "next/image";
import FAQ from "./components/faq";
import Portfolio from "./components/portfolio";
import Kontakt from "./components/kontakt";
import Proces from "./components/proces";


const menuItems = [
  { label: "Portfolio", targetId: "portfolio" },
  { label: "Proces", targetId: "proces" },
  { label: "FAQ", targetId: "faq" },
  { label: "Kontakt", targetId: "kontakt" }
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
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

<div id="poppins" className="justify-around ml-[5%] w-[90%] text-lg flex md:ml-0 md:w-full md:justify-end md:pr-20 pt-7 text-white space-x-10 absolute top-0 font-light md:text-2xl">
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
