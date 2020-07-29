import React, { FunctionComponent } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children: Object[];
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-200 min-h-full	">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
