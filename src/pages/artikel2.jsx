import { useEffect } from "react";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Layouts/Navbar";
import ArtikelLayouts2 from "../components/Layouts/ArtikelLayouts2";

const Artikel2 = () => {
  useEffect(() => {
    document.title = "Artikel";
  }, []);
  return (
    <div>
      <Navbar />
      <ArtikelLayouts2 />
      <Footer />
    </div>
  );
};

export default Artikel2;
