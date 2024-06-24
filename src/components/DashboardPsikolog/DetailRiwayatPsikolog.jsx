import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import Button from "../Layouts/Button";

const DetailRiwayatPsikolog = ({ open }) => {
  const [detail, setDetail] = useState(null);
  const { id_konsultasi } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/get-detail-konsultasi/${id_konsultasi}`);
        setDetail(response.data.data);
      } catch (error) {
        console.error('Error fetching detail:', error);
      }
    };
    fetchDetail();
  }, [id_konsultasi]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' }; 
    return new Intl.DateTimeFormat('id-ID', options).format(new Date(dateString));
  };

  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="container mx-auto py-24 px-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Nama Pasien</h2>
            <p className="text-gray-500">{detail.nama_pasien}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Nama Psikolog</h2>
            <p className="text-gray-500">{detail.nama_psikolog}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Tanggal</h2>
            <p className="text-gray-500">{formatDate(detail.tanggal)}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Nomor Konsultasi</h2>
            <p className="text-gray-500">{detail.nomor_konsultasi}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Hipotesis</h2>
            <p className="text-gray-500">{detail.hipotesis}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Kategori</h2>
            <p className="text-gray-500">{detail.kategori}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg col-span-3">
            <h2 className="text-xl font-semibold mb-2">Keterangan</h2>
            <p className="text-gray-500">{detail.catatan}</p>
          </div>
          <div className="text-center pt-10 rounded-lg col-span-3 text-gray-500 font-semibold">
            <p>
              Saudara {detail.nama_pasien} {detail.hipotesis} {detail.kategori}. {detail.simpulan}, {detail.simpulann}.
            </p>
          </div>
          {/* <div className="col-span-3">
            <Button variant="bg-teal-500">Lanjutkan!</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayatPsikolog;
