import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";
import ProfilUser from "../components/DashboardUser/ProfilUser";
const ProfilUserPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Profil User";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <Sidebar open={open} setOpen={setOpen} />
        <ProfilUser open={open} />
      </div>
    </div>
  );
};

export default ProfilUserPage;
