import { useEffect } from "react";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Layouts/Navbar";
import ArtikelLayouts1 from "../components/Layouts/ArtikelLayouts1";

const Artikel1 = () => {
  useEffect(() => {
    document.title = "Artikel";
  }, []);
  return (
    <div>
      <Navbar />
      <ArtikelLayouts1 />
      <Footer />
    </div>
  );
};

export default Artikel1;
