import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";
import ProfilDetailUser from "../components/DashboardUser/ProfilDetailUser";

const ProfilDetailUserPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Profil Psikolog";
  }, []);
  return <div>
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <Sidebar open={open} setOpen={setOpen} />
        <ProfilDetailUser open={open} />
      </div>
    </div>
  </div>;
};

export default ProfilDetailUserPage;
