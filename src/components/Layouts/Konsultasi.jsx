import { Link } from "react-router-dom";

const Konsultasi = () => {
  return (
    <div
      id="konsultasi"
      className="pt-10 mb-12 flex justify-center text-slate-600"
    >
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-8 md:px-12 lg:px-20 lg:w-1/2">
            <h1 className="font-semibold text-2xl mt-3 mb-2 md:text-3xl lg:text-4xl">
              Dari Hati ke Hati,
            </h1>
            <h1 className="font-semibold text-2xl mb-3 md:text-3xl lg:text-4xl">
              <span className="text-icon">Konsultan</span> Anda Siap Mendengar.
            </h1>
            <p className="mb-12 leading-relaxed text-justify lg:text-lg">
              Pada platform ini tidak hanya sebagai penyedia layanan
              profesional, tapi sebagai pendengar yang setia dan empatik.
              Pendekatan dari hati ke hati menyiratkan bahwa interaksi antara
              konsultan dan pengguna dilakukan dengan kehangatan dan pengertian
              mendalam.
            </p>
            <Link to={"/login"}>
              <div className="text-base font-semibold py-3 px-8 bg-teal-500 rounded-md hover:bg-teal-400 trasition duration-300 ease-in-out lg:text-xl text-white w-1/2 text-center">
                Konsultasi Sekarang
              </div>
            </Link>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 relative">
              <img
                src="/images/main3.png"
                alt=""
                className="max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konsultasi;
