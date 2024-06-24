import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-center text-slate-600 pb-20 border-t border-slate-200">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-8 md:px-12 lg:px-20 lg:w-full ">
            <div className="border-b border-slate-300 flex justify-between mb-4">
              <div className="pt-6 w-1/2">
                <img src="/images/logo.png" alt="" className="w-2/12" />
                <p className="font-semibold text-xl tracking-wide">
                  Back to Life, with ReLive
                </p>
                <span className="font-medium text-base">
                  Serve wholeheartedly, bringing life back to all who deserve to
                  live.
                </span>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6 mb-6">
                <div className="">
                  <h1 className="font-bold mb-4 text-lg">Tentang Kami</h1>
                  <ul className="font-medium text-slate-500">
                    <li className="mb-2">
                      <a href="#home">Beranda</a>
                    </li>
                    <li className="mb-2">
                      <a href="#tentang-kami">Tentang Kami</a>
                    </li>
                    <li className="mb-2">
                      <a href="#layanan">Layanan</a>
                    </li>
                    <li className="mb-2">
                      <a href="#artikel">Artikel</a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h1 className="font-bold mb-4 text-lg">Hubungi Kami</h1>
                  <ul className="font-medium text-slate-500">
                    <li className="mb-3">
                      <a href="#" className="flex justify-start gap-4">
                        <Phone />
                        <span>+62 821-7009-6965</span>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="flex justify-start gap-4">
                        <Mail />
                        <span>tryitbetter@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Copyright ©2024 - ReLive. All rights reserved.</p>
              </div>
              <div>
                <ul className="flex flex-row gap-4">
                    <li className="social-li">
                        <a href="#"><Instagram/></a>
                    </li>
                    <li className="social-li">
                        <a href="#"><Facebook/></a>
                    </li>
                    <li className="social-li">
                        <a href="#"><Linkedin/></a>
                    </li>
                    <li className="social-li">
                        <a href="#"><Youtube/></a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
