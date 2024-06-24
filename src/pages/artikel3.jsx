import { useEffect } from "react";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Layouts/Navbar";
import ArtikelLayouts3 from "../components/Layouts/ArtikelLayouts3";

const Artikel3 = () => {
  useEffect(() => {
    document.title = "Artikel";
  }, []);
  return (
    <div>
      <Navbar />
      <ArtikelLayouts3 />
      <Footer />
    </div>
  );
};

export default Artikel3;
