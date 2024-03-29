/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
