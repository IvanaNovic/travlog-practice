import React from "react";
import BgPic from "../../../assets/heroBackGround.svg";
import heroImg1 from "../../../assets/heroImg1.svg";
import heroImg2 from "../../../assets/heroImg2.svg";
import heroImg3 from "../../../assets/heroImg3.svg";
import sendIcon from "../../../assets/sendIcon.svg";
import addUserIcon from "../../../assets/addUserIcon.svg";
import locationIcon from "../../../assets/locationIcon.svg";

function Hero() {
  return (
    <section className="relative w-full px-4 py-4">
      <div className="w-full absolute">
        <img
          src={BgPic}
          alt="Planet with airplanes around it"
          className="w-full"
        />
      </div>
      <div className="relative flex flex-row gap-4 justify-center p-6 xsm:p-10 md:p-20 ">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img src={heroImg1} />
            <div className="absolute -left-4 -bottom-4">
              <button className="rounded-full bg-secondary py-2 px-2 shadow-md">
                <img src={sendIcon} className="w-4 h-4 " />
              </button>
            </div>
          </div>

          <img src={heroImg2} />
        </div>

        <div className="flex relative">
          <img src={heroImg3} />
          <div className="absolute left-4 -bottom-2">
            <button className="rounded-full bg-orange py-2 px-2 shadow-md">
              <img src={addUserIcon} className="w-4 h-4 " />
            </button>
          </div>
          <div className="absolute -right-12 bottom-12 ">
            <button className="inline-flex gap-1 rounded-full bg-fullwhite py-2 px-2  shadow-md text-xs ">
              <img src={locationIcon} className="w-4 h-4 " />
              Top places
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
