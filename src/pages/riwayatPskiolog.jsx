import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import SidebarPsikolog from "../components/Layouts/SidebarPsikolog";
import Button from "../components/Layouts/Button";
import RiwayatPsikolog from "../components/DashboardPsikolog/RiwayatPsikolog";
import { Link } from "react-router-dom";

const RiwayatPsikologPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Riwayat Konsultasi";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <SidebarPsikolog open={open} setOpen={setOpen} />
        <RiwayatPsikolog open={open} />
      </div>
      <div
        className="flex px-8 py-5 w-1/3"
        style={{
          marginLeft: open ? "240px" : "80px",
          transition: "margin-left 500ms ease-in-out",
        }}
      >
        <Link to={"/hasil-konsultasi"}>
          <Button variant="bg-teal-500">Buat Konsultasi Baru +</Button>
        </Link>
      </div>
    </div>
  );
};

export default RiwayatPsikologPage;
