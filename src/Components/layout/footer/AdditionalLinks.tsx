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
    title: "Contact",
    additionalLinks: [
      { title: "Why travlog?", href: "#" },
      { title: "Partner with us", href: "#" },
      { title: "FAQ's", href: "#" },
      { title: "Blog", href: "#" },
    ],
  },
  {
    title: "Meet Us",
    additionalLinks: [
      { title: "+00 92 1234 56789", href: "#" },
      { title: "info@travlog.com", href: "#" },
      { title: "205. R Street, New York \n BD23200", href: "#" },
    ],
  },
];

const AdditionalLinks = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-4">
      {additionalLinksData.map((data) => {
        return <AdditionalLink data={data} />;
      })}
    </div>
  );
};

export default AdditionalLinks;
