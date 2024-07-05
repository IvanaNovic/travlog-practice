import React, { FC, useState } from "react";
import { additionalLinkDataType } from "../../../types/additionalLink";
import arrowMoreDown from "../../../assets/arrowMoreDown.svg";

type AdditionalLinkProps = {
  data: additionalLinkDataType;
};

const AdditionalLink: FC<AdditionalLinkProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="font-semibold ">
        {data.title}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src={arrowMoreDown} alt="More informations" />
        </button>
      </div>
      <div
        className={`grid transition-all duration-500 border  `}
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
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
