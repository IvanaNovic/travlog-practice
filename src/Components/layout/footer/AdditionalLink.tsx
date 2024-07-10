import React, { FC, useState } from "react";
import { additionalLinkDataType } from "../../../types/additionalLink";
import arrowMoreDown from "../../../assets/arrowMoreDown.svg";
import { useIsTablet } from "../../../hooks/useMediaQuery";

type AdditionalLinkProps = {
  data: additionalLinkDataType;
};

const AdditionalLink: FC<AdditionalLinkProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useIsTablet();

  console.log(isTablet);

  return (
    <div>
      <div className="font-semibold flex justify-between">
        {data.title}
        <button
          className="block md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            src={arrowMoreDown}
            alt="More information"
            className={!isOpen ? "-rotate-90" : "rotate-0"}
          />
        </button>
      </div>
      <div
        className={`grid transition-all ${isOpen ? "max-h-full" : "max-h-0"} ${
          !isTablet ? "duration-500" : "duration-0"
        } md:max-h-full`}
        style={{
          gridTemplateRows: isOpen || isTablet ? "1fr" : "0fr",
        }}
      >
        <div className="flex flex-col h-full overflow-hidden ">
          {data.additionalLinks.map((link) => {
            return <a href={link.href}>{link.title}</a>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdditionalLink;
