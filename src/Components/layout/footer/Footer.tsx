import React from "react";
import logoImg from "../../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full px-4 py-4 flex flex-col md:flex-col lg:flex-row justify-between lg:items-center border">
      <div className="flex-1 mb-4 md:mb-4 lg:mb-0 border">
        <div className="mb-2">
          <img src={logoImg} alt="Logo" />
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            saepe suscipit quae excepturi eos non.
          </p>
        </div>
      </div>
      <div className="flex-1 border">
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-end">
          <a href="#">Company</a>
          <a href="#">Contact</a>
          <a href="#">Meet Us</a>
        </div>
      </div>
    </div>
  );
}
