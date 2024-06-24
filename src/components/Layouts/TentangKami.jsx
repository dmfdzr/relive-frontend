const TentangKami = () => {
  return (
    <div id="tentang-kami" className="pt-32 flex justify-center min-h-screen text-slate-600">
      <div className="container">
        <div className="flex flex-wrap">
          <h1 className="font-bold text-2xl mb-10 md:text-3xl lg:text-4xl text-center w-full">
            Tentang Kami
          </h1>
          <div className="w-full px-8 md:px-12 lg:px-20 lg:w-1/2">
            <div className="mt-10 relative">
              <img src="/images/main2.png" alt="" className="max-w-full mx-auto" />
            </div>
          </div>
          <div className="w-full self-center px-8 md:px-12 lg:px-20 lg:w-1/2">
            <h1 className="font-semibold text-2xl mt-3 mb-2 md:text-3xl lg:text-4xl">
              <span className="text-icon">Hidupkan</span> Kembali Harapan
            </h1>
            <h1 className="font-semibold text-2xl mb-3 md:text-3xl lg:text-4xl">
              Pulihkan Kesehatan Anda
            </h1>
            <p className="font-normal mb-12 lg:text-xl lg:leading-8 text-justify md:text-start lg:tracking-wide">
              ReLive adalah sebuah platform yang peduli akan kesehatan mental.
              Kami memiliki cita-cita untuk membantu dan mendampingi semua
              khalayak yang mengalami gangguan kesehatan mental dalam perjalanan
              mereka menuju kestabilan mental. Kami percaya dengan bantuan yang
              cepat dan tepat, mereka dapat merasakan kelegaan, layaknya seperti
              “hidup kembali”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
