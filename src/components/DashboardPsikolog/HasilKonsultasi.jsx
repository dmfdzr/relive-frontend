import { useEffect, useState } from "react";
import Button from "../Layouts/Button";
import { jwtDecode } from "jwt-decode";

const HasilKonsultasi = ({ open }) => {
  const token = sessionStorage.getItem("jwtToken");
  const decodedToken = jwtDecode(token);
  const nama_lengkap = decodedToken.nama_lengkap;
  const id_user = decodedToken.id_user; 
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    id_pasien: '',
    tanggal: '',
    hipotesis: '',
    kategori: '',
    catatan: '',
    simpulan: '',
    simpulann: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/get-role")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setPatients(data.data);
        }
      })
      .catch((error) => console.error("Error fetching patient data:", error));
  }, []);

  const handleInputChange = (event) => {
    const { name, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked ? event.target.getAttribute('data-value') : ''
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: event.target.value
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      id_pasien: '',
      tanggal: '',
      hipotesis: '',
      kategori: '',
      catatan: '',
      simpulan: '',
      simpulann: ''
    });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.id_pasien) newErrors.id_pasien = "Nama Klien harus diisi.";
    if (!formData.tanggal) newErrors.tanggal = "Tanggal Konsultasi harus diisi.";
    if (!formData.hipotesis) newErrors.hipotesis = "Hipotesa gangguan harus diisi.";
    if (!formData.kategori) newErrors.kategori = "Kategori harus diisi.";
    if (!formData.catatan) newErrors.catatan = "Keterangan harus diisi.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      alert('Semua field harus diisi.');
      return;
    }
    const { id_pasien, tanggal, hipotesis, kategori, catatan, simpulan, simpulann } = formData;

    fetch('http://localhost:3000/api/add-consultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_pasien,
        id_psikolog: id_user,
        tanggal,
        hipotesis,
        kategori,
        catatan,
        simpulan,
        simpulann
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Konsultasi berhasil disimpan.');
        resetForm(); 
      } else {
        alert('Gagal menyimpan konsultasi: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error saving consultation:', error);
      alert('Terjadi kesalahan saat menyimpan konsultasi.');
    });
  };

  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="bg-white w-full p-10">
        <div className="flex justify-end items-center mb-8">
          <div className="bg-gray-200 text-slate-700 p-2 rounded-md">
            {nama_lengkap}
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" value={id_user} name="id_user" />
          <div>
            <label className="block text-lg font-medium text-teal-500">
              Nama Klien
            </label>
            <select
              name="id_pasien"
              value={formData.id_pasien}
              onChange={handleInputChange}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm ${
                errors.id_pasien && "border-red-500"
              }`}
            >
              <option value="">Pilih Klien</option>
              {patients.map((patient) => (
                <option key={patient.id_user} value={patient.id_user}>
                  {patient.nama_lengkap}
                </option>
              ))}
            </select>
            {errors.id_pasien && (
              <p className="text-red-500 text-sm">{errors.id_pasien}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium text-teal-500">
              Tanggal Konsultasi
            </label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleInputChange}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm ${
                errors.tanggal && "border-red-500"
              }`}
            />
            {errors.tanggal && (
              <p className="text-red-500 text-sm">{errors.tanggal}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium text-teal-500">
              Hipotesa gangguan
            </label>
            <input
              type="text"
              name="hipotesis"
              value={formData.hipotesis}
              onChange={handleInputChange}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm ${
                errors.hipotesis && "border-red-500"
              }`}
            />
            {errors.hipotesis && (
              <p className="text-red-500 text-sm">{errors.hipotesis}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium text-teal-500">
              Kategori
            </label>
            <select
              name="kategori"
              value={formData.kategori}
              onChange={handleInputChange}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm ${
                errors.kategori && "border-red-500"
              }`}
            >
              <option value="">Pilih Kategori</option>
              <option value="Ringan">Ringan</option>
              <option value="Sedang">Sedang</option>
              <option value="Berat">Berat</option>
            </select>
            {errors.kategori && (
              <p className="text-red-500 text-sm">{errors.kategori}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium text-teal-500">
              Keterangan
            </label>
            <textarea
              name="catatan"
              value={formData.catatan}
              onChange={handleInputChange}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm ${
                errors.catatan && "border-red-500"
              }`}
            ></textarea>
            {errors.catatan && (
              <p className="text-red-500 text-sm">{errors.catatan}</p>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-center text-teal-500">
              <input
                type="checkbox"
                className="mr-2"
                name="simpulan"
                checked={formData.simpulan === "Membutuhkan Obat"}
                onChange={handleInputChange}
                data-value="Membutuhkan Obat"
              />
              <p>Membutuhkan Obat</p>
            </div>
            <div className="flex items-center text-teal-500">
              <input
                type="checkbox"
                className="mr-2"
                name="simpulann"
                checked={
                  formData.simpulann ===
                  "Membutuhkan Rujukan ke Dokter/Psikiater"
                }
                onChange={handleInputChange}
                data-value="Membutuhkan Rujukan ke Dokter/Psikiater"
              />
              <p>Membutuhkan Rujukan ke Dokter/Psikiater</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="bg-teal-500"
              className="text-white px-4 py-2 rounded-md"
            >
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HasilKonsultasi;
