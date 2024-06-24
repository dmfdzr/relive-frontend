import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const CardRiwayat = () => {
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const fetchRiwayat = async () => {
      try {
        const token = sessionStorage.getItem("jwtToken");
        if (token) {
          const decoded = jwtDecode(token);
          const idPasien = decoded.id_user;

          const response = await axios.get(
            `http://localhost:3000/api/get-riwayat/${idPasien}`
          );
          setRiwayat(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data or decoding token: ", error);
      }
    };
    fetchRiwayat();
  }, []);

  if (riwayat.length === 0) {
    return <div>Loading...</div>;
  }

  const dateOptions = { day: "2-digit", month: "long", year: "numeric" }; 

  return (
    <div className="max-w-screen my-4 mx-auto">
      {riwayat.map((item, index) => (
        <div
          key={index}
          className="bg-cyan-700 text-white rounded-lg p-5 my-2 flex items-center"
        >
          <img
            className="rounded-full w-24 h-24 mr-4"
            src="https://via.placeholder.com/60"
            alt="Profile Picture"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-center">
              <h3 className="text-base md:text-lg lg:text-xl font-bold">
                {new Date(item.tanggal).toLocaleDateString(
                  "id-ID",
                  dateOptions
                )}
              </h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lg mb-10 font-semibold">
              {item.nama_lengkap}
            </p>
            <div className="flex justify-between items-center">
            <Link to={`/detail-riwayat-user/${item.id_konsultasi}`}>
                <button
                  className="text-xs md:text-sm lg:text-base px-3 md:px-6 font-semibold rounded-md bg-teal-600 hover:bg-teal-700 text-white py-2"
                  type="submit"
                >
                  Lihat Rekap Hasil Konsultasi
                </button>
              </Link>
              <p className="text-xs text-white font-medium md:text-sm lg:text-base">
                Telah melakukan konsultasi
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRiwayat;
