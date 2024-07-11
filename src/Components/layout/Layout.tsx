import { FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-1 px-4 mx-auto  ">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
