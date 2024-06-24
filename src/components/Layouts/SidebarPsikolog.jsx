import {
  CircleUser,
  History,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
  // MessageSquareText,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const SidebarPsikolog = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault(); 
    const confirmLogout = confirm("Apakah Anda yakin ingin keluar?");
    if (confirmLogout) {
      navigate('/'); 
    }
  };

  const menus = [
    {
      name: "Profil",
      link: "/profil-psikolog",
      icon: <CircleUser size={20} />,
    },
    // { name: "Chat", link: "/chat-psikolog", icon: <MessageSquareText size={20} /> },
    { name: "Riwayat", link: "/riwayat-psikolog", icon: <History size={20} /> },
    { 
      name: "Keluar", 
      link: "/", 
      icon: <LogOut size={20} />,
      onClick: handleLogout 
    },
  ];

  return (
    <div
      className={`bg-[#047481] min-h-screen text-gray-100 px-4 py-4 ${
        open ? "w-60" : "w-20"
      } duration-500 flex-shrink-0 overflow-hidden fixed z-10`}
    >
      <div
        className={`flex ${open ? "justify-end py-3" : "justify-center py-3"}`}
      >
        <div
          className="cursor-pointer transition-transform duration-300 ease-out"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronsLeft size={26} /> : <ChevronsRight size={26} />}
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-4 relative">
        {menus.map((menu, i) => (
          <NavLink
            key={i}
            to={menu.link}
            onClick={menu.name === "Keluar" ? handleLogout : undefined} 
            className={({ isActive }) =>
              `item-sidebar ${
                isActive ? "text-white bg-[#0694A2]" : "text-gray-300"
              }`
            }
          >
            <div className="cursor-pointer">{menu.icon}</div>
            <h2
              style={{
                transitionDelay: `${i + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-20 overflow-hidden"
              }`}
            >
              {menu.name}
            </h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarPsikolog;
