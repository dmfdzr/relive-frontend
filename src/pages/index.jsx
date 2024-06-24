import { useEffect } from "react";
import Beranda from "../components/Layouts/Beranda";
import Footer from "../components/Fragments/Footer";
import Health from "../components/Layouts/Health";
import Konsultasi from "../components/Layouts/Konsultasi";
import Layanan from "../components/Layouts/Layanan";
import Navbar from "../components/Layouts/Navbar";
import TentangKami from "../components/Layouts/TentangKami";

const Index = () => {

  useEffect(() => {
    document.title = "Landing Page";
  }, []);

  return (
    <>
      <div className="bg-[#f8fafc]">
        <Navbar />
        <div id="beranda">
          <Beranda />
        </div>
        <div id="tentang-kami">
          <TentangKami />
        </div>
        <div id="layanan">
          <Layanan />
        </div>
        <div id="konsultasi">
          <Konsultasi />
        </div>
        <div id="artikel">
          <Health />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
