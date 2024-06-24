import { useEffect, useState } from "react";
import Logo from "../components/Layouts/Logo";
import Button from "../components/Layouts/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
      }, { withCredentials: true });
  
      console.log('Received response:', response.data);
      
      if (response.status === 200) {
        const { token, msg } = response.data;
  
        sessionStorage.setItem('jwtToken', token);
        
        if (msg === "Login berhasil") {
          const decodedToken = jwtDecode(token);
          const userRole = decodedToken.role;
  
          if (userRole === "pasien") {
            navigate("/profil-user");
          } else if (userRole === "psikolog") {
            navigate("/profil-psikolog");
          } else {
            setError('Role pengguna tidak dikenali.');
          }
        } else {
          setError('Terjadi kesalahan saat login.');
        }
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response && error.response.status === 400) {
        setError('Password salah. Silakan coba lagi.');
      } else if (error.response && error.response.status === 404) {
        setError('Email tidak ditemukan. Silakan periksa kembali email Anda.');
      } else {
        setError('Kesalahan saat login. Silakan coba lagi nanti.');
      }
    }
  };
  
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Logo />
      <div className="content-center w-full bg-cyan-600 sm:w-full p-10">
        <h2 className="text-3xl text-white font-bold pt-10 mb-2 px-20">
          Selamat Datang!
        </h2>
        <p className="text-white text-lg mb-10 px-20">
          Konsultasi Tanpa Batas, Solusi di Ujung Jari Anda
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4 px-20">
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline text-sm"
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
              className="shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="password"
              type="password"
              placeholder="Masukkan Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="px-20 mb-4 text-white">
              {error}
            </div>
          )}
          <div className="px-20">
            <Button variant="bg-teal-500 text-2xl">Masuk</Button>
          </div>
          <p className="text-white text-sm mt-10 text-center">
            Belum punya akun?
            <span>
              {" "}
              <Link to={"/register"} className="text-white font-semibold">
                Daftar
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
