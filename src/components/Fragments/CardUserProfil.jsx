import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

const CardUserProfil = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
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
    setNomorTelepon(decodedToken.nomer_telepon || "");

    if (decodedToken.tanggal_lahir) {
      const birthDate = moment(decodedToken.tanggal_lahir);
      const formattedDate = birthDate.format("YYYY-MM-DD");
      setTanggalLahir(formattedDate);

      const today = moment();
      const age = today.diff(birthDate, 'years');
      setUmur(age);
    } else {
      setTanggalLahir("");
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
          <label htmlFor="tanggal_lahir" className="block font-semibold text-slate-500 text-xl mb-2">
            Tanggal Lahir
          </label>
          <input
            type="date"
            value={tanggalLahir}
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
            value={`${umur} Tahun`}
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

export default CardUserProfil;
