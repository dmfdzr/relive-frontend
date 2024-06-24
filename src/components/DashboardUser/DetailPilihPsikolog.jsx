import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const DetailPilihPsikolog = ({ open }) => {
  const { uuid } = useParams();
  const [psikolog, setPsikolog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/profile-psikolog/${uuid}`)
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          setPsikolog(data.data[0]); 
        } else {
          alert('Psikolog tidak ditemukan');
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        alert('Failed to fetch data');
      });
  }, [uuid]);

  if (!psikolog) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-6 py-12 px-12 items-center">
          <div className="flex justify-center">
            <img
              src={
                psikolog.jenis_kelamin === "Laki-laki"
                  ? "/images/psikolog-man.png"
                  : "/images/psikolog-woman.png"
              }
              alt="Psikolog"
              className="rounded-full w-50"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-600 font-bold text-5xl mb-4">
              Profil Psikolog
            </h1>
            <h2 className="text-slate-600 font-bold text-3xl">
              {psikolog.nama_lengkap}
            </h2>
            <p className="text-teal-600 font-medium text-xl leading-[2rem] mb-4">
              {psikolog.spesialis}
            </p>
            <p className="text-slate-600 font-medium text-lg leading-[2rem] text-justify">
              {psikolog.biografi}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 px-12 items-center mb-6">
          <div className="p-5">
            <ul className="list-disc pl-5 leading-6 text-xl">
              <li className="font-semibold mb-3">Psikolog Terpercaya</li>
              <li className="font-semibold mb-3">Ramah dan dapat diandalkan</li>
              <li className="font-semibold mb-3">
                Berpengalaman dengan pasien yang memiliki mental issues
              </li>
              <li className="font-semibold mb-3">Teman terbaik anda</li>
            </ul>
          </div>
          <div className="px-5 py-8 bg-teal-500 rounded-md text-white flex items-center text-lg">
            <p>
            Ketika kamu merasa terjebak, ingatlah bahwa perubahan dimulai dari dalam diri. Mulailah dengan langkah kecil dan perlahan-lahan kamu akan melihat dunia berubah.
            </p>
          </div>
        </div>
        <div className="px-12 mb-20">
          <Link to={"/pilih-psikolog-user"}>
            <span className="bg-teal-500 rounded-bl-full rounded-tr-full py-3 px-12 font-medium text-white text-lg">
              Kembali
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPilihPsikolog;
