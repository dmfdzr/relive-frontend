import CardPilihPsikolog from "../Fragments/CardPilihPsikolog";

const PilihPsikologUser = ({open}) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="p-10 justify-between mb-8">
        <CardPilihPsikolog/>
      </div>
    </div>
  );
};

export default PilihPsikologUser;
