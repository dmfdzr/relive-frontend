import CardChatPsikolog from "../Fragments/CardChatPsikolog";

const ChatPsikolog = ({ open }) => {
  return (
    <div
      className="flex-grow px-8 py-5"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <CardChatPsikolog />

      
      

    </div>
  );
};

export default ChatPsikolog;
