import { useState, useEffect } from "react";
import Logo from "../components/Layouts/Logo";
import Button from "../components/Layouts/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nama_lengkap, setnama_lengkap] = useState("");
  const [password, setPassword] = useState("");
  const [jenis_kelamin, setjenis_kelamin] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Register";
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!nama_lengkap || !email || !password || !jenis_kelamin) {
      setError("Semua field harus diisi.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        email,
        password,
        nama_lengkap: nama_lengkap,
        jenis_kelamin: jenis_kelamin,
      });

      console.log("Received response:", response);
      if (response.status === 200) {
        navigate("/login");
      } else {
        setError("Registrasi gagal. Silakan coba lagi.");
      }
    } catch (error) {
      setError("Kesalahan saat registrasi. Silakan coba lagi nanti.");
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Logo />
      <div className="content-center w-full bg-cyan-600 sm:w-full p-10">
        <h2 className="text-3xl text-white font-semibold pt-10 mb-2 px-20">
          Registrasi!
        </h2>
        <p className="text-white text-lg mb-10 px-20">
          Masukkan data diri anda dibawah ini untuk memulai
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 px-20">
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="nama_lengkap"
            >
              Nama Pengguna
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="nama_lengkap"
              type="text"
              placeholder="Masukkan Nama Pengguna"
              value={nama_lengkap}
              onChange={(e) => setnama_lengkap(e.target.value)}
            />
          </div>
          <div className="mb-4 px-20">
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="email"
              type="email"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 px-20">
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="password"
            >
              Kata Sandi
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="password"
              type="password"
              placeholder="Masukkan Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 px-20">
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="jenis_kelamin"
            >
              Jenis Kelamin
            </label>
            <select
              className="w-full rounded-sm p-3"
              name="jenis_kelamin"
              required
              value={jenis_kelamin}
              onChange={(e) => setjenis_kelamin(e.target.value)}
            >
              <option value="" disabled>
                - Pilih Salah Satu -
              </option>
              <option value="Laki-laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          {error && <p className="text-white text-sm px-20">{error}</p>}
          <div className="px-20">
            <Button type="submit" variant="bg-teal-500 text-2xl">
              Daftar
            </Button>
          </div>
          <p className="text-white text-sm mt-10 text-center">
            Sudah punya akun?
            <span>
              {" "}
              <Link to={"/login"} className="text-white font-semibold">
                Masuk
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
