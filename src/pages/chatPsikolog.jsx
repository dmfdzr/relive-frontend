import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import ChatPsikolog from "../components/DashboardPsikolog/ChatPsikolog";
import SidebarPsikolog from "../components/Layouts/SidebarPsikolog";
const ChatPsikologPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Chat";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <SidebarPsikolog open={open} setOpen={setOpen} />
        <ChatPsikolog open={open} />
      </div>
    </div>
  );
};

export default ChatPsikologPage;
