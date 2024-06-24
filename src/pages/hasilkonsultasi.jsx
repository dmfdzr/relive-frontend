import { useEffect, useState } from "react";
import HasilKonsultasi from "../components/DashboardPsikolog/HasilKonsultasi";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import SidebarPsikolog from "../components/Layouts/SidebarPsikolog";

const HasilKonsultasiPage = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
    document.title = "Hasil Konsultasi";
    }, []);
    return (
        <div className="min-h-screen text-slate-600">
            <NavbarDashboard />
            <div className="flex bg-light pt-20">
                <SidebarPsikolog open={open} setOpen={setOpen} />
                <HasilKonsultasi open={open} />
            </div>
        </div>
    );
};

export default HasilKonsultasiPage;