import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] max-w-screen-xl mx-auto p-4">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
