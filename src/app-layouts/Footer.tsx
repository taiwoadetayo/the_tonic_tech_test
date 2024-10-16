import React from "react";
import { Link } from "react-router-dom";
import { FooterLogo } from "../app-assets/img";
import { FooterLinksProps } from "../app-schemas/Footer.interface";

const FooterBanner: React.FC = () => (
  <div className="mx-14 flex-col relative rounded-xl flex mb-36 bg-[#0A2640] py-16 overflow-hidden">
    <div className="absolute -top-[74em] -right-[40em] rounded-full bg-[#1C3D5B] h-[1293px] w-[1293px] rounded-3xl"></div>

    {/* newsletter */}
    <div className="flex justify-center z-10">
      <div className="w-full max-w-4xl text-center mt-4">
        <h1 className="text-white text-[48px] font-medium w-full mx-auto lg:px-20 font-manrope">
          An enterprise template to ramp up your company website
        </h1>
        
        <form className="flex justify-center gap-5 mt-12">
          <div>
            <input
              type="email"
              placeholder="Your email address"
              className="lg:w-[570px] w-full font-medium text-black shadow-sm rounded-full p-3 px-8 text-lg w-full max-w-md"
            />
          </div>

          <div>
            <button
              type="button"
              className="font-bold bg-[#65E4A3] text-[#0A2640] shadow-sm rounded-full p-3 px-8 text-lg w-full max-w-md"
            >
              Start now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

// FooterAboutBoldo Component
const FooterAboutBoldo: React.FC = () => (
  <div className="col-span-2 pr-[7rem]">
    <div>
      <img src={FooterLogo} className="h-[41px]" alt="footer-logo" />
    </div>
    <p className="text-[16px] text-[#777777] font-medium mt-8 leading-[28px]">
      Social media validation business model canvas graphical user interface
      launch party creative Facebook, iPad, Twitter.
    </p>
    <p className="text-[16px] text-[#777777] font-medium mt-12 leading-[28px]">
      All rights reserved.
    </p>
  </div>
);

// FooterLinks Component
const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <div className="col-span-1">
    <h4 className="text-[20px] font-[700] mb-8">{title}</h4>
    <ul className="text-sm space-y-10 font-normal text-[20px] text-[#777777]">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.url}
            className="hover:text-[#0A2640] flex items-center gap-3"
          >
            <span>{link.name}</span>
            {link.isHiring && (
              <button className="shadow-sm px-4 py-1 rounded-3xl bg-[#65E4A3] text-[#0A2640] text-[13px] font-[700]">
                Hiring!
              </button>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-24 mx-auto container">
      {/* footer Banner */}
      <FooterBanner />

      <div className="mx-14 grid grid-cols-5 gap-5 mb-12">
        {/* Footer About */}
        <FooterAboutBoldo />

        {/* Footer Links Sections */}
        <FooterLinks
          title="Landings"
          links={[
            { name: "Home", url: "/" },
            { name: "Products", url: "/" },
            { name: "Services", url: "/" },
          ]}
        />

        <FooterLinks
          title="Company"
          links={[
            { name: "Home", url: "/" },
            { name: "Careers", url: "/", isHiring: true },
            { name: "Services", url: "/" },
          ]}
        />

        <FooterLinks
          title="Resources"
          links={[
            { name: "Blog", url: "/" },
            { name: "Products", url: "/" },
            { name: "Services", url: "/" },
          ]}
        />
      </div>
    </footer>
  );
};

export default Footer;
