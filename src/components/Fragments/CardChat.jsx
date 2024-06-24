import { Link } from 'react-router-dom';

const CardChat = () => {
  return (
    <Link to="/detail-chat-user">
      <div className="w-max-screen my-4 mx-auto bg-cyan-700 text-white rounded-lg p-5 flex items-center cursor-pointer hover:bg-cyan-600 transition duration-200">
        <img className="rounded-full w-16 h-16 mr-4" src="https://via.placeholder.com/60" alt="Profile Picture" />
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">Max Verstappen</h3>
            <span className="text-xs md:text-sm lg:text-base">Selasa, 10:00 AM</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs md:text-sm lg:text-base">Halo, </p>
            <div className="bg-green-500 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center">
              1
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardChat;
