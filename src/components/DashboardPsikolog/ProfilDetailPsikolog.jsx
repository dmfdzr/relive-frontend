import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProfilDetailPsikolog = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [spesialis, setSpesialis] = useState("");
  const [umur, setUmur] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [biografi, setBiografi] = useState("");
  const [pengalaman, setPengalaman] = useState("");
  const [userUuid, setUserUuid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setNamaLengkap(decodedToken.nama_lengkap || "");
        setJenisKelamin(decodedToken.jenis_kelamin || "");
        setSpesialis(decodedToken.spesialis || "");
        setUmur(decodedToken.umur || "");
        setNomorTelepon(decodedToken.nomer_telepon || "");
        setBiografi(decodedToken.biografi || "");
        setPengalaman(decodedToken.pengalaman || "");
        setUserUuid(decodedToken.uuid || "");
      } catch (error) {
        console.error("Gagal mendekode token:", error);
      }
    }
  }, []);

  const handleSave = async () => {
    const updatedData = {
      nama_lengkap: namaLengkap,
      jenis_kelamin: jenisKelamin,
      spesialis: spesialis,
      umur: umur,
      nomer_telepon: nomorTelepon,
      biografi: biografi,
      pengalaman: pengalaman,
    };

    const response = await fetch(
      `http://localhost:3000/api/profile-psikolog-edit/${userUuid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(updatedData),
      }
    );

    const data = await response.json();
    if (response.ok) {
      sessionStorage.setItem("jwtToken", data.token);
      alert("Profil berhasil diperbarui");
      navigate("/detail-profil-psikolog");
    } else {
      alert(data.msg);
    }
  };

  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="grid grid-cols-1 px-16 gap-1 pt-12">
        <div className="w-full mb-4">
          <label
            htmlFor="nama_lengkap"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="jenis_kelamin"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Jenis Kelamin
          </label>
          <select
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
            name="jenis_kelamin"
            required
            value={jenisKelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
          >
            <option value="" disabled>
              - Pilih Salah Satu -
            </option>
            <option value="Laki-laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="spesialis"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Spesialis
          </label>
          <input
            type="text"
            value={spesialis}
            onChange={(e) => setSpesialis(e.target.value)}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="umur"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Umur
          </label>
          <input
            type="text"
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="nomer_telepon"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Nomor Telepon
          </label>
          <input
            type="tel"
            value={nomorTelepon}
            onChange={(e) => setNomorTelepon(e.target.value)}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="biografi"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Biografi
          </label>
          <textarea
            id="biografi"
            value={biografi}
            onChange={(e) => setBiografi(e.target.value)}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
            rows="6" 
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="pengalaman"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Pengalaman
          </label>
          <input
            type="tel"
            value={pengalaman}
            onChange={(e) => setPengalaman(e.target.value)}
            placeholder="Masukkan pengalaman Anda"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
          />
        </div>
      </div>
      <div className="flex justify-end items-center mb-4 px-16 pt-4">
        <Link to={"/detail-profil-psikolog"}>
          <button
            onClick={handleSave}
            className="bg-teal-500 hover:bg-teal-600 text-white text-xl font-semibold p-4 rounded w-60"
          >
            Simpan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilDetailPsikolog;
