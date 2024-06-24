import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";
import DetailPilihPsikolog from "../components/DashboardUser/DetailPilihPsikolog";

const PilihDetailPsikologUserPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Pilih Psikolog";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <Sidebar open={open} setOpen={setOpen} />
        <DetailPilihPsikolog open={open} />
      </div>
    </div>
  );
};

export default PilihDetailPsikologUserPage;
