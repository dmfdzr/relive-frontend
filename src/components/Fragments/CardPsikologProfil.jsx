import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const CardPsikologProfil = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [spesialis, setSpesialis] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [umur, setUmur] = useState("");

  useEffect(() => {
    const loadProfileData = () => {
      const token = sessionStorage.getItem("jwtToken");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          updateProfileState(decodedToken);
        } catch (error) {
          console.error("Gagal mendecode token:", error);
        }
      }
    };

    loadProfileData();

  }, []);

  const updateProfileState = (decodedToken) => {
    setNamaLengkap(decodedToken.nama_lengkap || "");
    setSpesialis(decodedToken.spesialis || "");
    setNomorTelepon(decodedToken.nomer_telepon || "");

    if (decodedToken.umur) {
      setUmur(`${decodedToken.umur} Tahun`);
    } else {
      setUmur("");
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 px-44 gap-12 mb-2">
        <div className="w-full mb-4">
          <label htmlFor="nama_lengkap" className="block font-semibold text-slate-500 text-xl mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={namaLengkap}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg font-base"
            readOnly
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="spesialis" className="block font-semibold text-slate-500 text-xl mb-2">
            Spesialis
          </label>
          <input
            type="text"
            value={spesialis}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg font-medium"
            readOnly
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="umur" className="block font-semibold text-slate-500 text-xl mb-2">
            Umur
          </label>
          <input
            type="text"
            value={umur} 
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg font-medium"
            readOnly
          />
        </div>
        <div className="w-full">
          <label htmlFor="nomer_telepon" className="block font-semibold text-slate-500 text-xl mb-2">
            Nomor Telepon
          </label>
          <input
            type="tel"
            value={nomorTelepon}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg font-medium"
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default CardPsikologProfil;
