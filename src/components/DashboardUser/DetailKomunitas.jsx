// import KomunitasForm from "../Layouts/KomunitasForm";
import KomunitasMain from "../Layouts/KomunitasMain";

const DetailKomunitas = ({ open }) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
        <KomunitasMain />
        
    </div>
  );
};

export default DetailKomunitas;
