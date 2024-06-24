import CardRiwayat from "../Fragments/CardRiwayat";
const RiwayatUser = ({ open }) => {
  return (
    <div
      className="flex-grow px-8 py-5"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
        <CardRiwayat />
    </div>
  );
};

export default RiwayatUser;
