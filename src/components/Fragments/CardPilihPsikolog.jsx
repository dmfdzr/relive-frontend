import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardPilihPsikolog = () => {
  const [psikolog, setPsikolog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/show-psikolog");
        const data = await response.json();
        if (response.ok) {
          setPsikolog(data.data);
        } else {
          alert(data.msg);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        alert("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {psikolog.map((item) => (
        <div key={item.uuid} className="flex flex-row items-center gap-6 mb-4">
          <div className="flex justify-start items-center gap-4 border-2 border-teal-500 px-5 py-8 rounded-lg w-full">
            <img
              src={
                item.jenis_kelamin === "Laki-laki"
                  ? "/images/psikolog-man.png"
                  : "/images/psikolog-woman.png"
              }
              alt="Psikolog"
              className="rounded-full w-28"
            />
            <div className="w-full">
              <h2 className="text-2xl font-semibold text-slate-600 mt-4">
                {item.nama_lengkap}
              </h2>
              <p className="text-base font-medium text-gray-600 mb-10">
                {item.spesialis}
              </p>
              <div className="flex justify-between gap-4 w-full items-center">
                <div className="flex justify-start gap-4">
                  <a
                    href={`https://wa.me/${item.jenis_kelamin === "Laki-laki" ? "6282170096964" : "6285882270980"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white py-1 px-4 bg-teal-500 rounded-md"
                  >
                    Chat
                  </a>
                  <Link
                    to={`/detail-pilih-psikolog-user/${item.uuid}`}
                    className="text-white py-1 px-4 bg-teal-500 rounded-md w-full"
                  >
                    Lihat Profil
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-teal-500 p-8 rounded-lg shadow-md text-white w-full">
            <h2 className="text-3xl font-semibold mb-4">Profil Singkat</h2>
            <div className="flex">
              <div className="border-l-4 border-white h-auto self-stretch mr-8"></div>
              <div className="flex flex-col justify-between">
                <div className="text-2xl">
                  <div className="mb-1 font-semibold">{item.nama_lengkap}</div>
                  <p className="mb-1 text-lg">{item.biografi.slice(0, 100)}</p>
                  <p className="text-base">
                  {item.pengalaman} Tahun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPilihPsikolog;
