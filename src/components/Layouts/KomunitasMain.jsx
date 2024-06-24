import { useState, useEffect } from "react";
import KomunitasForm from "./KomunitasForm";
import CardKomunitas from "../Fragments/CardKomunitas";

const KomunitasMain = () => {
  const [forums, setForums] = useState([]);

  const fetchForums = async () => {
    const response = await fetch("http://localhost:3000/api/show-forum");
    const data = await response.json();
    if (response.ok) {
      setForums(data.data);
    } else {
      console.error(data.msg);
    }
  };

  useEffect(() => {
    fetchForums();
  }, []);

  const handleNewForum = async (catatan, id_user) => {
    const response = await fetch("http://localhost:3000/api/add-forum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ catatan, id_user }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Catatan berhasil ditambahkan!");
      fetchForums(); 
    } else {
      console.error("Error:", data.msg);
      alert("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <div>
      <KomunitasForm onNewForum={handleNewForum} />
      {forums.map((forum) => (
        <CardKomunitas
          key={forum.id_forum}
          nama={forum.nama_lengkap}
          waktu={forum.created_at}
          catatan={forum.catatan}
        />
      ))}
    </div>
  );
};

export default KomunitasMain;
