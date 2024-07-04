import { FC, ReactNode } from "react";
import Header from "./header/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4 mx-auto ">{children}</main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
