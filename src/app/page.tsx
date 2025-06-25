'use client';

import Image from "next/image";
import FAQ from "./components/faq";
import Portfolio from "./components/portfolio";
import Zalety from "./components/zalety";
import Kontakt from "./components/kontakt";
import Proces from "./components/proces";
import Menu from "./components/menu";
import { useState } from 'react';

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
    className="absolute  w-full text-center top-[100px] md:top-[175px] font-black text-white px-4"
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

<Menu></Menu>
<Portfolio></Portfolio>
<Proces></Proces>
<FAQ></FAQ>
<Kontakt></Kontakt>
    </div>
  );
}
