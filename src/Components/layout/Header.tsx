import React from "react";
import logoImg from "../../assets/Frame 1.svg";

export default function Header() {
  return (
    <div className="w-full h-28 flex flex-row justify-between border pt px-4 items-center ">
      <img src={logoImg} className="w-36 h-10" alt="logo" />
      <p>Menu</p>
    </div>
  );
}
