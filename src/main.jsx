import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Artikel from "./pages/artikel1";
import Artikel2 from "./pages/artikel2";
import Artikel4 from "./pages/artikel4";
import Artikel3 from "./pages/artikel3";
import ProfilUserPage from "./pages/profilUser";
import ChatUserPage from "./pages/chatUser";
import ChatDetailUserPage from "./pages/chatDetailUser";
import RiwayatUserPage from "./pages/riwayatUser";
import RiwayatDetailUserPage from "./pages/riwayatDetailUser";
import PilihPsikologUserPage from "./pages/pilihPsikologUser";
import PilihDetailPsikologUserPage from "./pages/pilihDetailPsikologUser";
import KawanRelivePage from "./pages/kawanRelive";
import ChatPsikologPage from "./pages/chatPsikolog";
import ChatDetailPsikologPage from "./pages/chatDetailPsikolog";
import DetailKomunitasPage from "./pages/detailKomunitas";
import RiwayatPsikologPage from "./pages/riwayatPskiolog";
import RiwayatDetailPsikologPage from "./pages/riwayatDetailPsikolog";
import HasilKonsultasiPage from "./pages/hasilKonsultasi";
import Register from "./pages/register";
import ProfilPsikologPage from "./pages/profilPsikolog";
import ProfilDetailPsikologPage from "./pages/profilDetailPsikolog";
import ProfilDetailUserPage from "./pages/profilDetailUser";  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/artikel1",
    element: <Artikel />,
  },
  {
    path: "/artikel2",
    element: <Artikel2 />,
  },
  {
    path: "/artikel3",
    element: <Artikel3 />,
  },
  {
    path: "/artikel4",
    element: <Artikel4 />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profil-user",
    element: <ProfilUserPage />,
  },
  {
    path: "/detail-profil-user",
    element: <ProfilDetailUserPage />,
  },
  {
    path: "/pilih-psikolog-user",
    element: <PilihPsikologUserPage />,
  },
  {
    path: "/detail-pilih-psikolog-user/:uuid",
    element: <PilihDetailPsikologUserPage />,
  },
  {
    path: "/chat-user",
    element: <ChatUserPage />,
  },
  {
    path: "/detail-chat-user",
    element: <ChatDetailUserPage />,
  },
  {
    path: "/riwayat-user",
    element: <RiwayatUserPage />,
  },
  {
    path: "/detail-riwayat-user/:id_konsultasi",
    element: <RiwayatDetailUserPage />,
  },
  {
    path: "/kawan-relive-user",
    element: <KawanRelivePage />,
  },
  {
    path: "/chat-psikolog",
    element: <ChatPsikologPage />,
  },
  {
    path: "/detail-chat-psikolog",
    element: <ChatDetailPsikologPage />,
  },
  {
    path: "/detail-komunitas-user",
    element: <DetailKomunitasPage />,
  },
  {
    path: "/riwayat-psikolog",
    element: <RiwayatPsikologPage />,
  },
  {
    path: "/detail-riwayat-psikolog/:id_konsultasi",
    element: <RiwayatDetailPsikologPage />,
  },
  {
    path: "/hasil-konsultasi",
    element: <HasilKonsultasiPage/>,
  },
  {
    path: "/profil-psikolog",
    element: <ProfilPsikologPage />,
  },
  {
    path: "/detail-profil-psikolog",
    element: <ProfilDetailPsikologPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
