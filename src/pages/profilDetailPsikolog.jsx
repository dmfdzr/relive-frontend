import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import SidebarPsikolog from "../components/Layouts/SidebarPsikolog";
import ProfilDetailPsikolog from "../components/DashboardPsikolog/ProfilDetailPsikolog";

const ProfilDetailPsikologPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Profil Psikolog";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <SidebarPsikolog open={open} setOpen={setOpen} />
        <ProfilDetailPsikolog open={open} />
      </div>
    </div>
  );
};

export default ProfilDetailPsikologPage;
