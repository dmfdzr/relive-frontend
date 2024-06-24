import { Link } from 'react-router-dom';

const CardRounded = () => {
  return (
    <div className="min-h-screen py-4 px-8">
        <div className="text-center mb-8">
            <h1 className="text-xl font-bold mt-5">Selamat datang di laman Kawan Relive, temukan teman berbagi di sini</h1>
        </div>
        <div className="flex items-center justify-start">
            <img src="/images/encok.svg" className="h-[25rem]" alt="" />
            <div className="flex justify-center items-center relative px-12 py-8 bg-teal-500 text-white rounded-[100px] shadow-lg h-[12rem] max-w-[30rem]">
                <div className="absolute top-0 right-0 transform -translate-y-1/2 -translate-x-[40%] bg-green-400 rounded-full w-[5rem] h-[5rem]"></div>
                <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-[70%] bg-green-400 rounded-full w-[3rem] h-[3rem]"></div>
                <p className="text-center text-[15px]">
                Kawan Relive adalah laman komunitas untuk para pengguna website Relive untuk berbagi cerita dan keluh kesahnya. Pengalaman adalah guru terbaik, dengan bercerita kita bisa belajar dan juga memahami hal baru. Dengan bercerita kita bisa saling memahami.
                </p>
            </div>
        </div>
        <div className="flex justify-end gap-5 items-end w-max-full h-auto">
          <div className="rounded-full bg-cyan-400 w-[3rem] h-[3rem]"></div>
          <div className="rounded-full bg-cyan-400 w-[4rem] h-[4rem]"></div>
        </div>

        <div className="flex justify-center items-center my-5">
          <div className="flex flex-col gap-5 justify-center items-center">
            <p className="text-center font-medium text-black">Dalam laman ini, kalian bebas mengobrol dan juga bertukar pikiran bersama semua pengguna.</p>
            <p className="text-center text-4xl p-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Apakah kamu siap menjadi Kawan ReLive?</p>
            <p className="text-center font-regular text-black">Bercerita maupun mendengarkan cerita orang lain akan membuat hati kita lebih tenang. </p>
          </div>
          <img src="/images/konsul2.png" className="h-auto w-auto" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center  mt-[6rem] mb-[2rem]">
          <p className="text-center text-black my-5">Lihat dan buat postingan di sini, <span className="text-cyan-500">bercengkeramalah!</span></p>
          <Link to ="/detail-komunitas-user"> 
            <button className="w-[15rem] px-6 py-3 text-2xl font-semibold rounded-[5rem] shadow-lg bg-cyan-600 hover:bg-cyan-500 text-white" type="submit">
              Mulai
            </button>
          </Link>
          
        </div>
    </div>
    
    
    
  )
}

export default CardRounded
