const Beranda = () => {
  return (
    <div id="beranda" className="pt-32 flex justify-center text-slate-600">
      <div className="container">
        <div className="w-full self-center px-8 md:px-12 lg:px-20 -mb-5">
          <h1 className="font-bold text-2xl mt-3 mb-2 md:text-3xl lg:text-5xl md:text-center">
            Berdialog tentang <span className="text-icon">Kesehatan</span>
          </h1>
          <h1 className="font-bold text-2xl mb-4 md:text-3xl lg:text-5xl md:text-center">
            Bersama Kami Setiap Langkahnya
          </h1>
          <p className="font-normal mb-8 md:text-center lg:text-xl text-justify lg:tracking-wide">
            Platform konsultasi online ini berkomitmen untuk memberikan dukungan
            berkelanjutan dan penuh perhatian kepada setiap penggunanya dalam
            menjaga atau meningkatkan kesehatan mereka.
          </p>
          <div className="flex md:justify-center">
            <a
              href="#tentang-kami"
              className="text-base font-semibold py-3 px-8 bg-teal-500 rounded-md hover:bg-teal-400 trasition duration-300 ease-in-out lg:text-xl text-white"
            >
              Lihat selengkapnya
            </a>
          </div>
        </div>
        <div className="w-full pb-20">
          <div className="mt-10">
            <img
              src="/images/main1.png"
              alt=""
              className="w-full lg:w-2/6 mx-auto md:w-8/12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
