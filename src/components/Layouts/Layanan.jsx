import { Header, ServiceCards } from "../Fragments/LayananCard";

const Layanan = () => {
    return (
        <div id="layanan" className="pt-32 flex justify-center text-slate-600">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-8 md:px-12 lg:px-20">
                        <Header />
                        <ServiceCards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layanan;
