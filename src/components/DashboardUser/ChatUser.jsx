import CardChat from "../Fragments/CardChat";

const ChatUser = ({ open }) => {
  return (
    <div
      className="flex-grow px-8 py-5"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <CardChat />
      <CardChat />
      <CardChat />
      <CardChat />
      <CardChat />
    </div>
  );
};

export default ChatUser;
