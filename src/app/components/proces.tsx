import { useState } from "react";

const Opisy = [
  {
    tytul: "KONTAKT",
    opis: "Po otrzymaniu wiadomości, postaramy się dokładnie zapoznać z oczekiwaniami.",
  },
  {
    tytul: "PROJEKT",
    opis: "W dalszym etapie stworzymy graficzny projekt strony.",
  },
  {
    tytul: "REALIZACJA",
    opis: "Po akceptacji projektu, przejdziemy do tworzenia strony.",
  },
  {
    tytul: "ODDANIE",
    opis: "Po zakończeniu realizacji strona trafia w ręce klienta, a my pozostajemy w kontakcie w celu wsparcia technicznego.",
  },
];

export default function Proces() {
  return (
    <div className="bg-gray-800 w-full py-[50px] md:py-[100px] flex flex-col lg:flex-row items-center">
      <div className="w-full  text-center ">
        <div
          id="playfair"
          className="text-white text-5xl md:text-7xl font-black mb-[50px] md:mb-[50px]"
        >
          PROCES
        </div>
        <div
          id="poppins"
          className="hidden lg:block font-light w-[60%] mx-auto mt-[20px] text-lg text-gray-300"
        >
          Zapoznaj się z naszym procesem tworzenia strony, która wpasuje się w wymagania naszego klienta.
        </div>
      </div>

      <div className="w-full  flex flex-wrap justify-center gap-8 mt-16 px-4">
        {Opisy.map((krok, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[40%] bg-gray-900 p-6 rounded-lg text-white text-center shadow-md"
          >
            <div className="text-2xl font-bold mb-4">{krok.tytul}</div>
            <div className="text-sm text-gray-400">{krok.opis}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
