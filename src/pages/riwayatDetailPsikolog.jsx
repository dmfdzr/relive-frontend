import { useEffect, useState } from "react";
import SidebarPsikolog from "../components/Layouts/SidebarPsikolog";
import DetailRiwayatPsikolog from "../components/DashboardPsikolog/DetailRiwayatPsikolog";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";

const RiwayatDetailPsikologPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Detail Riwayat";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <SidebarPsikolog open={open} setOpen={setOpen} />
        <DetailRiwayatPsikolog open={open} />
      </div>
    </div>
  );
};

export default RiwayatDetailPsikologPage;
