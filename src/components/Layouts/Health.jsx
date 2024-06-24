import ArtikelCard from "../Fragments/ArtikelCard";

const Health = () => {
  return (
    <div
      id="artikel"
      className="pt-32 flex justify-center text-white bg-teal-500"
    >
      <div className="container">
        <div className="flex flex-wrap mb-20">
          <div className="w-full self-center px-8 md:px-12 lg:px-20">
            <h1 className="font-bold text-2xl mb-10 md:text-3xl lg:text-4xl text-center w-full">
              Artikel
            </h1>
          </div>
          <ArtikelCard/>
        </div>
      </div>
    </div>
  );
};

export default Health;
