import { useEffect, useState } from "react";
import PilihPsikologUser from "../components/DashboardUser/PilihPsikologUser";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";

const PilihPsikologUserPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Pilih Psikolog";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <Sidebar open={open} setOpen={setOpen}/>
        <PilihPsikologUser open={open}/>
      </div>
    </div>
  );
};

export default PilihPsikologUserPage;
