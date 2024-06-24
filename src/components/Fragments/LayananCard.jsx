import { AudioLines, FolderLock, HandHeart } from 'lucide-react';

export const Header = () => (
    <h1 className="font-bold text-2xl mb-20 md:text-3xl lg:text-4xl text-center w-full">
        Kenapa kamu harus memilih ReLive?
    </h1>
);

export const ServiceCards = () => (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
        <ServiceCard
            icon={<AudioLines data-lucide="audio-lines" className="text-3xl w-20 h-10 bg-[#BCF0DA] p-2 rounded-md text-[#0E9F6E]" />}
            title="Kesiapan untuk Mendengarkan"
            description="Ini menegaskan bahwa setiap masalah, besar atau kecil, penting
                        dan akan ditanggapi dengan serius. Konsultan di platform ini
                        dilatih untuk mendengarkan secara aktif, memastikan bahwa
                        setiap pengguna merasa didengar dan dipahami."
        />
        <ServiceCard
            icon={<HandHeart data-lucide="hand-heart" className="text-3xl w-20 h-10 bg-[#FCD9BD] rounded-md p-2 text-[#FF5A1F]" />}
            title="Dukungan yang Berkelanjutan"
            description="Ini bukan hanya tentang sesi konsultasi tunggal, melainkan
                        tentang membangun hubungan jangka panjang dimana pengguna
                        dapat merasa nyaman untuk kembali dan mendapatkan bantuan
                        kapan pun dan dimana pun mereka membutuhkannya."
        />
        <ServiceCard
            icon={<FolderLock data-lucide="folder-lock" className="text-3xl w-20 h-10 bg-[#C3DDFD] p-2 rounded-md text-[#3F83F8]" />}
            title="Keramahan dan Keamanan"
            description="Mencerminkan suasana yang ramah dan penuh keamanan yang
                        ditawarkan oleh platform. Pengguna dijamin dapat berbagi
                        informasi pribadi mereka tanpa kekhawatiran tentang privasi,
                        yang sangat penting dalam konteks kesehatan mental dan fisik."
        />
    </div>
);

const ServiceCard = ({ icon, title, description }) => (
    <div className="grid-layanan">
        <div className="flex justify-start gap-4 items-center w-full mb-4">
            <div className="grid-layanan-icon">
                {icon}
            </div>
            <h2 className="font-semibold md:text-xl">
                {title}
            </h2>
        </div>
        <p className="leading-7 lg:text-base md:text-start text-justify">
            {description}
        </p>
    </div>
);
