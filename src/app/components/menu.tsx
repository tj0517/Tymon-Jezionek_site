import React from "react";

const menuItems = ["Portfolio","Proces","Faq","Kontakt"];

const Menu: React.FC = () => {
  return (
    <div id="poppins" className="hidden md:flex w-full justify-end pr-20 pt-7 text-white space-x-10 absolute top-0 font-light text-2xl">
      {menuItems.map((item, i) => (
        <div key={i} className="hover:underline cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Menu;
