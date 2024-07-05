import React from "react";
import logoImg from "../../../assets/logo.svg";
import Hamburger from "./Hamburger";
import Login from "./Login";
import SignUp from "./SignUp";
import SpecialDeals from "./SpecialDeals";
import Discover from "./Discover";
import Contact from "./Contact";
import HomeHeader from "./HomeHeader";

export default function Header() {
  return (
    <div className="w-full h-28 flex flex-row justify-between  py-1 px-4 items-center ">
      <div className=" flex-1 md:order-2">
        <img src={logoImg} className="max-w-36 h-10 " alt="logo" />
      </div>
      <div className="lg:hidden md:order-1 flex-1 flex justify-end md:justify-start">
        <Hamburger />
      </div>
      <div className="order-3 hidden md:flex flex-1 justify-end  ">
        <Login />
        <SignUp />
      </div>
      <div className="order-2  hidden lg:flex flex-1 justify-center text-neutral gap-16 text-sm">
        <HomeHeader />
        <Discover />
        <SpecialDeals />
        <Contact />
      </div>
    </div>
  );
}
