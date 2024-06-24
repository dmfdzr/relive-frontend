import { useEffect } from "react";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Layouts/Navbar";
import ArtikelLayouts4 from "../components/Layouts/ArtikelLayouts4";

const Artikel4 = () => {
  useEffect(() => {
    document.title = "Artikel";
  }, []);
  return (
    <div>
      <Navbar />
      <ArtikelLayouts4 />
      <Footer />
    </div>
  );
};

export default Artikel4;
