import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";
import Komunitas from "../components/DashboardUser/Komunitas";

const KawanRelivePage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Chat";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <Sidebar open={open} setOpen={setOpen} />
        <Komunitas open={open} />
      </div>
    </div>
  );
};

export default KawanRelivePage;
