import { format, parseISO } from 'date-fns';

const CardKomunitas = ({ nama, waktu, catatan }) => {
  const formattedTime = format(parseISO(waktu), ' dd MMM yyyy | HH.mm');

  return (
    <div className="w-max-screen h-[10rem] text-black border-b-2 border-solid border-cyan-600 px-8 flex items-center py-[6rem]">
      <img className="rounded-full w-24 h-24 mr-4" src="https://via.placeholder.com/60" alt="Profile Picture" />
      <div className="flex-grow">
        <div className="flex flex-col mb-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-base text-[#0694A2] md:text-lg lg:text-2xl font-bold">{nama}</span>
            <p className='font-regular text-slate-600'>{formattedTime}</p>
          </div>
          <p className="text-xs md:text-sm lg:text-base">{catatan}</p>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium items-center">
          {/* <button className="h-10 px-6 font-semibold rounded-md bg-[#5EAB80] border border-slate-200 text-white" type="button">
            Tanggapi
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CardKomunitas;
