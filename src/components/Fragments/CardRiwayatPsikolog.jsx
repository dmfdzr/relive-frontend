import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const CardRiwayatPsikolog = () => {
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const fetchRiwayat = async () => {
      try {
        const token = sessionStorage.getItem("jwtToken");
        if (token) {
          const decoded = jwtDecode(token);
          const idPsikolog = decoded.id_user;

          const response = await axios.get(
            `http://localhost:3000/api/get-list-consultation/${idPsikolog}`
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
        <Link to={`/detail-riwayat-psikolog/${item.id_konsultasi}`} key={index} className="block">
          <div className="bg-cyan-700 text-white rounded-lg p-5 my-2 flex items-center hover:bg-cyan-800 transition duration-300">
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="text-base md:text-lg lg:text-xl font-bold">
                  {item.hipotesis}
                </h3>
                <span className="text-xs md:text-sm lg:text-base font-semibold">
                  {new Date(item.tanggal).toLocaleDateString(
                    "id-ID",
                    dateOptions
                  )}
                </span>
              </div>
              <p className="text-xs md:text-sm lg:text-xl mb-10 font-semibold">
                {item.nama_lengkap}
              </p>
              <div className="flex justify-between items-center">
                <div className="p-2 text-xs md:text-sm lg:text-base px-3 md:px-6 font-semibold rounded-md bg-teal-600 text-white">
                  {item.kategori}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardRiwayatPsikolog;
