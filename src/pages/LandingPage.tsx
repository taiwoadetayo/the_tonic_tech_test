// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Blog01,
  Blog02,
  Blog03,
  FAQBanner,
  Check,
  ArrowLeft,
  ArrowRight,
  LadyWithLaptop,
  PieGraph,
  Logo,
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Author01,
  Author02,
  Author03,
  User01,
  User02,
  User03,
  LogoManOnPhone,
  Services01,
  Services02,
  Services03,
  HeroGraphics,
} from "../app-assets/img";
import {
  SvgIcon1,
  SvgIcon2,
  SvgIcon3,
  Barchart,
} from "../app-assets/svg-icons/SvgIcon";
import BlogCard from "../app-components/BlogCard";
import FAQItem from "../app-components/FAQItem";
import FeatureCard from "../app-components/FeatureCard";
import InfoCard from "../app-components/InfoCard";
import InfoCardRight from "../app-components/InfoCardRight";
import TestimonialCard from "../app-components/TestimonialCard";
import Footer from "../app-layouts/Footer";

const LandingPage = () => {
  const blogs = [
    {
      image: Blog01,
      category: "Category",
      date: "November 22, 2021",
      caption: "Pitch termsheet backing validation focus release.",
      author: "Chandler Bing",
      authorImg: Author01, // Replace with author's image if available
    },
    {
      image: Blog02,
      category: "Category",
      date: "November 22, 2021",
      caption:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      author: "Chandler Bing",
      authorImg: Author02, // Replace with author's image if available
    },
    {
      image: Blog03,
      category: "Category",
      date: "November 22, 2021",
      caption:
        "Beta prototype sales iPad gen-z marketing network effects value proposition.",
      author: "Chandler Bing",
      authorImg: Author03, // Replace with author's image if available
    },
  ];

  return (
    <main>
      {/* hero area && header area */}
      <section className="py-6 flex-col relative flex mb-36 bg-[#0A2640] overflow-hidden">
        <div className="absolute -top-[60em] -right-[50em] rounded-full bg-[#1C3D5B] h-[1293px] w-[1293px] rounded-3xl"></div>

        <div className="container mx-auto flex justify-between gap-24 items-center">
          <Link to="/">
            <img src={Logo} alt="h-logo" />
          </Link>
          <ul className="z-10 text-white flex justify-end gap-10 items-center font-semibold">
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <button className="hover:shadow-lg p-2 px-10 bg-white rounded-full text-[#1C3D5B] font-semibold">
                Log In
              </button>
            </li>
          </ul>
        </div>

        <div className="container mx-auto flex justify-between gap-24 items-center mt-12">
          <div className="w-1/2">
            <h1 className="text-white font-medium text-[42px] font-medium font-manrope pr-16">
              Save time by building fast with Boldo Template
            </h1>

            <p className="text-sm text-white mt-6">
              Funding handshake buyer business-to-business metrics iPad
            </p>
            <p className="text-sm text-white">
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>

            <div className="flex gap-5 pr-8 mt-12">
              <button className="font-bold bg-[#65E4A3] text-[#0A2640] shadow-sm rounded-full p-3 px-24 text-lg">
                Buy template
              </button>

              <button className="font-bold border-white border border-[2px] bg-[#0A2640] text-white shadow-sm rounded-full p-3 px-12 text-lg">
                Explore
              </button>
            </div>
          </div>

          <div className="z-10 w-1/2 flex justify-end">
            <img
              src={HeroGraphics}
              alt="HeroGraphics"
              className="flex justify-end"
            />
          </div>
        </div>

        {/* clients area */}
        <div className="container flex gap-10 mx-auto justify-center mt-24 z-10 mb-12">
          <div className="h-[1px] w-[1px] custom-shadow z-[50] relative left-[53px]"></div>
          <img src={Logo02} alt="client" />
          <img src={Logo03} alt="client" />
          <img src={Logo04} alt="client" />
          <img src={Logo05} alt="client" />
          <img src={Logo06} alt="client" />
          <img src={Logo01} alt="client" />
          <div className="h-[1px] w-[1px] custom-shadow z-[50] relative right-[73px]"></div>
        </div>
      </section>

      {/* our services */}
      <section
        id="bounce-in-section"
        className="bg-white mx-auto container mt-24 relative mb-[100px]"
      >
        {/* services area lead */}
        <div className="w-full text-center mb-12 px-36">
          <h5 className="text-[#777777] text-lg">Our Services</h5>
          <h1 className="text-[42px] font-medium font-manrope">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>

        {/* grid-3 area */}
        <div className="mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32 items-center">
          <FeatureCard
            imageSrc={Services01}
            title="Cool feature title"
            description="Learning curve network effects return on investment."
            altText="Cool feature image"
          />
          <FeatureCard
            imageSrc={Services02}
            title="Even cooler feature"
            description="Learning curve network effects return on investment."
            altText="Even cooler feature image"
          />
          <FeatureCard
            imageSrc={Services03}
            title="Cool feature title"
            description="Learning curve network effects return on investment."
            altText="Another cool feature image"
          />
        </div>

        {/* start now connect area */}
        <div className="mx-14 relative pb-[300px]">
          <div className="grid lg:grid-cols-2 gap-44 items-center">
            {/* Left Section - Image with Floating Box */}
            <div className="relative">
              <img
                src={LogoManOnPhone}
                alt="Lady with Laptop"
                className="w-full shadow-sm"
              />
              <div className="shadow-lg p-8 py-10 bg-white lg:w-[280px] lg:top-[320px] lg:left-[60px] absolute z-10 rounded-xl">
                <div className="w-full flex items-center justify-center mb-5">
                  <Barchart />
                </div>
                <div>
                  <h3 className="font-manrope font-bold text-2xl">30%</h3>
                  <p className="font-manrope text-sm font-medium">
                    More income in June
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Text and Cards */}
            <div className="relative">
              <h2 className="text-[32px] mt-12 mb-12 font-manrope font-semibold">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h2>

              <InfoCardRight text="We connect our customers with the best." />
              <InfoCardRight text="Advisor success customer launch party." />
              <InfoCardRight text="Business-to-consumer long tail." />

              <button
                type="button"
                className="mt-6 font-bold bg-[#0A2640] text-white shadow-sm rounded-full p-3 px-12 text-lg"
              >
                Start now
              </button>
            </div>
          </div>
        </div>

        {/* customer connect area */}
        <div className="mx-14 relative pb-[180px]">
          <div className="grid lg:grid-cols-2 gap-44 items-center">
            {/* Left Section - Text and Cards */}
            <div className="relative mt-12">
              <h2 className="text-[32px] mb-12 font-manrope font-semibold">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h2>

              <InfoCard
                bgColor="bg-[#0A2640]"
                textColor="text-white"
                borderColor="border-[#f1f1f1]"
                text="We connect our customers with the best."
                icon={<SvgIcon1 />}
              />
              <InfoCard
                bgColor="bg-white"
                textColor="text-[#0A2640]"
                borderColor="border-[#f1f1f1]"
                text="Advisor success customer launch party."
                icon={<SvgIcon2 />}
              />
              <InfoCard
                bgColor="bg-white"
                textColor="text-[#0A2640]"
                borderColor="border-[#f1f1f1]"
                text="Business-to-consumer long tail."
                icon={<SvgIcon3 />}
              />
            </div>

            {/* Right Section - Image with Floating Box */}
            <div className="relative">
              <img
                src={LadyWithLaptop}
                alt="Lady with Laptop"
                className="w-full shadow-sm"
              />
              <div className="shadow-lg p-8 py-10 bg-white lg:w-[280px] lg:top-[320px] lg:left-[60px] absolute z-10 rounded-xl">
                <div className="w-full flex items-center justify-center mb-5">
                  <img src={PieGraph} alt="Pie Graph" />
                </div>
                <ul className="text-[16px] font-medium space-y-3 mx-auto w-full">
                  <li className="flex gap-3 items-center font-manrope">
                    <span className="block rounded-full bg-[#0DBBFC] h-[6px] w-[6px]"></span>
                    35% - Agile Development
                  </li>
                  <li className="flex gap-3 items-center font-manrope ">
                    <span className="block rounded-full bg-[#69E6A6] h-[6px] w-[6px]"></span>
                    30% - Investor bandwidth
                  </li>
                  <li className="flex gap-3 items-center font-manrope">
                    <span className="block rounded-full bg-[#C4C4C4] h-[6px] w-[6px]"></span>
                    35% - A/B testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="relative bg-[#0A2640] py-20 mb-12">
        <div className="mx-auto container mx-14">
          {/* Header with Arrows for nav */}
          <div className="mx-14 pb-16 grid grid-cols-1 lg:grid-cols-3 items-end">
            <div className="col-span-2">
              <h1 className="text-[40px] font-manrope text-white pr-32">
                An enterprise template to ramp up your company website
              </h1>
            </div>

            <div className="flex gap-4 justify-start lg:justify-end">
              <button>
                <img
                  src={ArrowLeft}
                  alt="ArrowLeft"
                  className="bg-white p-3 rounded-full"
                />
              </button>
              <button>
                <img
                  src={ArrowRight}
                  alt="ArrowRight"
                  className="bg-white p-3 rounded-full"
                />
              </button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-14">
            <TestimonialCard
              quote="“Buyer buzz partner network disruptive non-disclosure agreement business.”"
              name="Albus Dumbledore"
              role="Manager @ Hogwarts"
              image={User01}
            />
            <TestimonialCard
              quote="“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"
              name="Severus Snape"
              role="Manager @ Slytherin"
              image={User02}
            />
            <TestimonialCard
              quote="“Release facebook responsive web design business model canvas seed money monetization.”"
              name="Harry Potter"
              role="Team Leader @ Gryffindor"
              image={User03}
            />
          </div>
        </div>
      </section>

      {/* FAQ area */}
      <section className="bg-white lg:py-12 mx-auto container">
        {/* Banner Section */}
        <div className="mb-8 mx-14">
          <img src={FAQBanner} alt="faq-banner" className="w-full shadow-sm" />
        </div>

        {/* Content Section */}
        <div className="flex mx-14 gap-8">
          {/* Heading */}
          <h1 className="lg:text-[32px] font-medium lg:pr-24 w-full lg:w-1/2 font-manrope">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>

          {/* FAQ Section */}
          <div className="text-lg font-medium w-full lg:w-1/2">
            {/* FAQ Item */}
            <FAQItem
              question="We connect our customers with the best?"
              icon={Check}
            />
            <FAQItem
              question="Android research & development rockstar?"
              icon={Check}
            />
          </div>
        </div>
      </section>

      {/* BLOG area */}
      <section className="mx-auto bg-white container lg:px-28 py-12">
        {/* blog area lead */}
        <div className="w-full text-center mb-12">
          <h5 className="text-[#777777] text-lg">Our Blog</h5>
          <h1 className="text-[42px] px-6 font-medium font-manrope">
            Value proposition accelerator product management venture
          </h1>
        </div>

        {/* blog cards */}
        <div className="mx-14 grid grid-cols-3 gap-14 mb-12 items-center">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              caption={blog.caption}
              author={blog.author}
              authorImg={blog.authorImg}
            />
          ))}
        </div>

        {/* load more link */}
        <div className="text-center mt-20">
          <Link
            to={"/"}
            className="p-4 px-16 font-bold text-lg bg-white border-2 rounded-full border-[#0A2640] text-[#0A2640]"
          >
            Load more
          </Link>
        </div>
      </section>

      {/* footer area */}
      <Footer />
    </main>
  );
};

export default LandingPage;
