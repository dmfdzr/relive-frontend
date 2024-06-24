import CardRounded from "../Fragments/CardRounded";

const Komunitas = ({ open }) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
        <CardRounded />
        
    </div>
  );
};

export default Komunitas;
