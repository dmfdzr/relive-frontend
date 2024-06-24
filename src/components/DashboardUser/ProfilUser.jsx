import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import CardUserProfil from "../Fragments/CardUserProfil";

const ProfilUser = ({ open }) => {
  const token = sessionStorage.getItem("jwtToken");
  const decodedToken = jwtDecode(token);
  const nama_lengkap = decodedToken.nama_lengkap;
  const jenis_kelamin = decodedToken.jenis_kelamin;

  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute w-full h-1/2 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"></div>
        <div className="absolute left-1/2 bottom-[120px] transform -translate-x-1/2 translate-y-2/5 w-40 h-40 bg-white rounded-full border-4 border-white z-10">
          <img
            src={
              jenis_kelamin === "Laki-laki"
                ? "/images/psikolog-man.png"
                : "/images/psikolog-woman.png"
            }
            alt="Profile Image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute left-1/2 bottom-[50px] transform -translate-x-1/2 text-center">
          <h2 className="text-3xl font-bold text-teal-500 mt-4">
            {nama_lengkap}
          </h2>
          <p className="text-base font-medium text-gray-600">{jenis_kelamin}</p>
        </div>
      </div>
      <CardUserProfil />
      <div className="flex justify-end px-44 items-center mb-4">
        <Link to={"/detail-profil-user"}>
          <button className="bg-teal-500 hover:bg-teal-600 text-white text-xl font-semibold py-2 px-4 rounded w-40 h-11">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilUser;
