import ChatColumnPsikolog from "../Layouts/ChatColumnPsikolog";

const ChatDetailPsikolog = ({ open }) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
        <ChatColumnPsikolog />

    </div>
  );
};

export default ChatDetailPsikolog;
