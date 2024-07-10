import React from "react";
import logoImg from "../../../assets/logo.svg";
import AdditionalLinks from "./AdditionalLinks";
import SocialNetworks from "./SocialNetworks";

export default function Footer() {
  return (
    <footer className="flex gap-16 w-full px-4 py-4 flex-col md:flex-col lg:flex-row justify-between lg:items-center">
      <div className="lg:w-1/2 mb-4 md:mb-4 lg:mb-0 ">
        <div className="mb-2">
          <img src={logoImg} alt="Logo" />
        </div>
        <div>
          <p className="text-neutral">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <SocialNetworks />
      </div>
      <div className="flex-1">
        <div className="flex flex-col ">
          <AdditionalLinks />
        </div>
      </div>
    </footer>
  );
}
