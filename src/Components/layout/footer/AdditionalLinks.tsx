import React from "react";
import AdditionalLink from "./AdditionalLink";
import { additionalLinkDataType } from "../../../types/additionalLink";

const additionalLinksData: additionalLinkDataType[] = [
  {
    title: "Company",
    additionalLinks: [
      { title: "About", href: "#" },
      { title: "Career", href: "#" },
      { title: "Mobile", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    additionalLinks: [
      { title: "About", href: "#" },
      { title: "Career", href: "#" },
      { title: "Mobile", href: "#" },
    ],
  },
  {
    title: "Meet Us",
    additionalLinks: [
      { title: "About", href: "#" },
      { title: "Career", href: "#" },
      { title: "Mobile", href: "#" },
    ],
  },
];

const AdditionalLinks = () => {
  return (
    <div>
      {additionalLinksData.map((data) => {
        return <AdditionalLink data={data} />;
      })}
    </div>
  );
};

export default AdditionalLinks;
