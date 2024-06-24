import { MoveLeft } from "lucide-react";
import { useEffect } from "react";

const ArtikelLayouts3 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div id="artikel">
      <div className="relative w-full max-h-full text-slate-600 mb-[42rem]">
        <div
          className="relative w-full h-[40rem] bg-cover bg-center p-16"
          style={{ backgroundImage: "url('/images/artikel3.jpg')" }}
        >
          <div className="absolute w-1/2 mt-[22rem] h-auto bg-white shadow-lg border rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-5">
              Memahami Definisi “Mental Health”
            </h1>
            <p className="font-normal mb-12 lg:text-xl lg:leading-8 text-justify md:text-start lg:tracking-wide">
              <span className="text-teal-700 font-medium">
                Halo Kawan ReLive!,
              </span>{" "}
              Kesehatan mental (mental health) adalah keadaan di mana seseorang
              memiliki kesejahteraan emosional, psikologis, dan sosial yang
              baik. Kondisi ini memengaruhi cara berpikir, merasakan, dan
              bertindak seseorang serta berperan penting dalam menentukan cara
              mereka mengatasi stres, berhubungan dengan orang lain, dan membuat
              keputusan yang sehat.
            </p>
            <h1 className="text-2xl font-bold mb-5">
              Kesehatan Mental Yang Baik
            </h1>
            <p className="font-normal mb-12 lg:text-xl lg:leading-8 text-justify md:text-start lg:tracking-wide">
              Kondisi kesehatan mental yang baik ditandai dengan keadaan jiwa
              dan pikiran yang tenang dan damai. Kondisi ini memungkinkan
              seseorang untuk berpikir lebih jernih dan fokus saat beraktivitas.
              Sama halnya dengan kesehatan fisik, kesehatan mental juga penting
              untuk dijaga. Seseorang dengan kesehatan mental yang baik mampu
              mengoptimalkan potensi dirinya dalam menghadapi permasalahan
              hidup, tantangan, hingga menjalin hubungan yang positif dengan
              orang lain.
            </p>
            <p className="font-normal mb-12 lg:text-xl lg:leading-8 text-justify md:text-start lg:tracking-wide">
              Sementara itu, kondisi mental yang terganggu dapat berdampak buruk
              terhadap emosi, suasana hati, dan kemampuan seseorang dalam
              berpikir. Tanpa adanya penanganan yang tepat, kondisi mental yang
              terganggu dapat memicu permasalahan dalam kehidupan sehari-hari
              yang akhirnya memengaruhi kualitas hidup penderitanya, seperti
              menurunnya produktivitas di tempat kerja atau prestasi di sekolah
              hingga merusak hubungan sosial dengan orang lain.
            </p>
            <p className="font-normal mb-5 lg:text-xl lg:leading-8 text-justify md:text-start lg:tracking-wide">
              Maka dari itu, setiap individu diimbau untuk mulai memelihara
              kesehatan mentalnya dan belajar mengenali gejala-gejala atau tanda
              dari gangguan mental sedari dini tanpa berpikir bahwa gangguan
              kejiwaan merupakan suatu hal yang tabu atau aib untuk
              diperbincangkan.
            </p>
          </div>
          <br />
        </div>
        <div className="container px-8 flex justify-end w-full h-auto text-slate-600">
          <div className="w-fit h-auto mr-20 my-10 bg-white">
            <h1 className="text-2xl font-bold mb-4">Artikel Lainnya</h1>
            <div className="bg-white w-[400px] border-b-2 p-4 shadow flex items-center mb-4 rounded-md">
              <img
                src="https://via.placeholder.com/48"
                alt=""
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  Apa itu konseling? dan apa saja jenisnya?
                </h3>
                <p className="text-gray-500">Technical advisor</p>
              </div>
            </div>
            <div className="bg-white w-[400px] border-b-2 p-4 shadow flex items-center mb-4 rounded-md">
              <img
                src="https://via.placeholder.com/48"
                alt=""
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  Contoh gangguan kesehatan mental
                </h3>
                <p className="text-gray-500">Technical advisor</p>
              </div>
            </div>
            <div className="bg-white w-[400px] border-b-2 p-4 mb-4 shadow flex items-center rounded-md">
              <img
                src="https://via.placeholder.com/48"
                alt=""
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Breaking the stigma</h3>
                <p className="text-gray-500">Technical advisor</p>
              </div>
            </div>
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 my-5 ml-2 font-medium hover:text-gray-900 flex flex-row gap-2 items-center"
            >
              <MoveLeft />
              <span>Kembali</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelLayouts3;
