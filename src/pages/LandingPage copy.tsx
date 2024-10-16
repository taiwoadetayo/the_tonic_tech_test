import { Link } from "react-router-dom";
import { FooterLogo } from "../app-assets/img";
import Footer from "../app-layouts/Footer";

const LandingPage = () => {
  return (
    <main>
      {/* header area*/}
      <header></header>

      {/* hero area */}
      <section></section>

      {/* our services */}
      <section></section>

      {/* testimonials */}
      <section></section>

      {/* FAQ area */}
      <section></section>

      {/* BLOG area */}
      <section></section>

      {/* footer area */}
      <footer className="bg-white py-24 flex mt-[800px]">
        <div className="mx-14 grid grid-cols-5 gap-5 mb-12 ">
          {/* footer banner */}
          <div className="col-span-2 pr-[10rem]">
            <div>
              <img src={FooterLogo} className="h-[41px]" alt="footer-logo" />
            </div>

            <p className="text-[16px] text-[#777777] font-medium mt-8 leading-[28px]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>

            <p className="text-[16px] text-[#777777] font-medium mt-12 leading-[28px]">
              All rights reserved.
            </p>
          </div>

          {/* footer - landings links */}
          <div className="col-span-1">
            <h4 className="text-[20px] font-[700] mb-10">Landings</h4>
            <ul className="text-sm space-y-10 font-normal text-[20px] text-[#777777]">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* footer company links */}
          <div className="col-span-1">
            <h4 className="text-[20px] font-[700] mb-8">Company</h4>
            <ul className="text-sm space-y-8 font-normal text-[20px] text-[#777777]">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline flex gap-3 items-center">
                  <span>Careers</span>
                  <button className="shadow-sm px-4 py-1 rounded-3xl bg-[#65E4A3] text-[#0A2640] text-[13px] font-[700]">Hiring!</button>
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* footer resources link */}
          <div className="col-span-1">
            <h4 className="text-[20px] font-[700] mb-8">Resources</h4>
            <ul className="text-sm space-y-10 font-normal text-[20px] text-[#777777]">
              <li>
                <Link to="/" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <Footer />
    </main>
  );
};

export default LandingPage;
