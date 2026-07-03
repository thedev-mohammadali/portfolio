import { Outlet } from "react-router-dom";

import Footer from "@/components/sections/Footer";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <a
        href="#main-content"
        className="focus:bg-background focus:text-foreground sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
