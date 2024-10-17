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
  Analytics01,
  Analytics02,
  Analytics03,
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Author01,
  Author02,
  Author03,
} from "../app-assets/img";
import BlogCard from "../app-components/BlogCard";
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
      {/* header area*/}
      <header></header>

      {/* hero area */}
      <section className="flex-col relative flex mb-36 bg-[#0A2640] overflow-hidden">
        <div className="absolute -top-[74em] -right-[40em] rounded-full bg-[#1C3D5B] h-[1293px] w-[1293px] rounded-3xl"></div>

        <div>
          <img src={Logo} />
          <ul>
            <li>Product</li>
            <li>Services</li>
            <li>About</li>
            <li>
              <button>Log In</button>
            </li>
          </ul>
        </div>

        <div>
          <h1>Save time by building fast with Boldo Template </h1>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <button>Buy template</button>
          <button>Explore</button>
        </div>

        <div>
          <img src={Analytics02} />
          <img src={Analytics01} />
          <img src={Analytics03} />
        </div>

        <div>
          <img src={Logo01} />
          <img src={Logo02} />
          <img src={Logo03} />
          <img src={Logo04} />
          <img src={Logo05} />
          <img src={Logo06} />
        </div>
      </section>

      {/* our services */}
      <section>
        <div className="w-full text-center mb-12">
          <h5>Our Services</h5>
          <h1 className="text-[48px] ">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="mx-14 grid grid-cols-3 gap-12 mb-12 items-center">
          <div className="col-span-1 items-center">
            {/* image */}
            <img src={Blog01} />
            {/* category */}
            <div className="flex gap-3 py-4 text-lg">
              <h5 className="font-bold text-[#0A2640]">Category</h5>
              <span className="text-[#777777]">November 22, 2021</span>
            </div>

            {/* caption */}
            <p className="text-[20px] font-semibold">
              Pitch termsheet backing validation focus release.
            </p>

            {/* author */}
            <div className="flex gap-4 mt-5">
              <img src={Blog01} className="w-[32px] h-[32px] rounded-full" />
              <span>Chandler Bing</span>
            </div>
          </div>

          <div className="col-span-1 ">
            {/* image */}
            <img src={Blog02} />
            {/* category */}
            <div className="flex gap-3 py-3 text-lg">
              <h5 className="font-bold text-[#0A2640]">Category</h5>
              <span className="text-[#777777]">November 22, 2021</span>
            </div>

            {/* caption */}
            <p className="text-[20px] font-semibold">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>

            {/* author */}
            <div className="flex gap-4 mt-5">
              <img src={Blog01} className="w-[32px] h-[32px] rounded-full" />
              <span>Chandler Bing</span>
            </div>
          </div>

          <div className="col-span-1 ">
            {/* image */}
            <img src={Blog03} />
            {/* category */}
            <div className="flex gap-3 py-3 text-lg">
              <h5 className="font-bold text-[#0A2640]">Category</h5>
              <span className="text-[#777777]">November 22, 2021</span>
            </div>

            {/* caption */}
            <p className="text-[20px] font-semibold">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition
            </p>

            {/* author */}
            <div className="flex gap-4 mt-5">
              <img src={Blog01} className="w-[32px] h-[32px] rounded-full" />
              <span>Chandler Bing</span>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div>
            <h2>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <div>
              <div>
                <div className="bg-[#0A2640] text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 8L2 22"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 15H9"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  We connect our customers with the best.
                </div>

                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_62_553)">
                      <path
                        d="M1.77502 12.6543C1.77502 12.6543 5.77502 4.6543 12.775 4.6543C19.775 4.6543 23.775 12.6543 23.775 12.6543C23.775 12.6543 19.775 20.6543 12.775 20.6543C5.77502 20.6543 1.77502 12.6543 1.77502 12.6543Z"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.775 15.6543C14.4319 15.6543 15.775 14.3112 15.775 12.6543C15.775 10.9974 14.4319 9.6543 12.775 9.6543C11.1182 9.6543 9.77502 10.9974 9.77502 12.6543C9.77502 14.3112 11.1182 15.6543 12.775 15.6543Z"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_62_553">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.775024 0.654297)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Advisor success customer launch party.
                </div>

                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_62_578)">
                      <path
                        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 1V3"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 21V23"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.22 4.21997L5.64 5.63997"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.36 18.3601L19.78 19.7801"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 12H3"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 12H23"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.22 19.7801L5.64 18.3601"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.36 5.63997L19.78 4.21997"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_62_578">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Business-to-consumer long tail.
                </div>
              </div>

              <div>
                <img src={LadyWithLaptop} />
                <div className="shadow-lg p-24 bg-white">
                  <img src={PieGraph} />
                  <div>
                    <ul>
                      <li className="flex gap-3">
                        <span className="block rounded-full bg-[#0DBBFC] h-[10px] w-[10px]"></span>
                        35% - Agile Development
                      </li>
                      <li className="flex gap-3">
                        <span className="block rounded-full bg-[#69E6A6] h-[10px] w-[10px]"></span>
                        30% - Investor bandwidth
                      </li>
                      <li className="flex gap-3">
                        <span className="block rounded-full bg-[#C4C4C4] h-[10px] w-[10px]"></span>
                        35% - A/B testing{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div>
            <h2>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <div>
              <div>
                <div className="bg-[#0A2640] text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 8L2 22"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 15H9"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  We connect our customers with the best.
                </div>

                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_62_553)">
                      <path
                        d="M1.77502 12.6543C1.77502 12.6543 5.77502 4.6543 12.775 4.6543C19.775 4.6543 23.775 12.6543 23.775 12.6543C23.775 12.6543 19.775 20.6543 12.775 20.6543C5.77502 20.6543 1.77502 12.6543 1.77502 12.6543Z"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.775 15.6543C14.4319 15.6543 15.775 14.3112 15.775 12.6543C15.775 10.9974 14.4319 9.6543 12.775 9.6543C11.1182 9.6543 9.77502 10.9974 9.77502 12.6543C9.77502 14.3112 11.1182 15.6543 12.775 15.6543Z"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_62_553">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.775024 0.654297)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Advisor success customer launch party.
                </div>

                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_62_578)">
                      <path
                        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 1V3"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 21V23"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.22 4.21997L5.64 5.63997"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.36 18.3601L19.78 19.7801"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 12H3"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 12H23"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.22 19.7801L5.64 18.3601"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.36 5.63997L19.78 4.21997"
                        stroke="#0A2640"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_62_578">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Business-to-consumer long tail.
                </div>
              </div>

              <div>
                <img src={LadyWithLaptop} />
                <div className="shadow-lg p-24 bg-white">
                  <img src={PieGraph} />
                  <div>
                    <ul>
                      <li className="flex gap-3">
                        <span className="block rounded-full bg-[#0DBBFC] h-[10px] w-[10px]"></span>
                        35% - Agile Development
                      </li>
                      <li className="flex gap-3">
                        <span className="block rounded-full bg-[#69E6A6] h-[10px] w-[10px]"></span>
                        30% - Investor bandwidth
                      </li>
                      <li className="flex gap-3">
                        <span className="block rounded-full bg-[#C4C4C4] h-[10px] w-[10px]"></span>
                        35% - A/B testing{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="bg-[#0A2640] p-24 mb-24">
        <div>
          <h1 className="text-[42px] text-white">
            An enterprise template to ramp up your company website
          </h1>
          <div>
            <img src={ArrowLeft} className="bg-white p-3" />
            <img src={ArrowRight} className="bg-white p-3" />
          </div>
        </div>

        <div className="mx-14 grid grid-cols-3 gap-12 mb-12 items-center">
          <div className="bg-white rounded-lg p-12">
            <p>
              “Buyer buzz partner network disruptive non-disclosure agreement
              business”
            </p>
            <div className="flex gap-4 mt-5">
              <img src={Blog01} className="w-[32px] h-[32px] rounded-full" />
              <div>
                <p>Albus Dumbledore</p>
                <p>Manager @ Howarts</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-12">
            <p>
              “Learning curve infrastructure value proposition advisor strategy
              user experience hypotheses investor.”
            </p>
            <div className="flex gap-4 mt-5">
              <img src={Blog01} className="w-[32px] h-[32px] rounded-full" />
              <div>
                <p>Albus Dumbledore</p>
                <p>Manager @ Howarts</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-12">
            <p>
              “Release facebook responsive web design business model canvas seed
              money monetization.”
            </p>
            <div className="flex gap-4 mt-5">
              <img src={Blog01} className="w-[32px] h-[32px] rounded-full" />
              <div>
                <p>Albus Dumbledore</p>
                <p>Manager @ Howarts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ area */}
      <section className="bg-white lg:py-12 mx-auto container">
        <div className="mb-8 mx-14">
          <img src={FAQBanner} alt="faq-banner" className="w-full" />
        </div>

        <div className="flex mx-14 gap-8">
          <h1 className="lg:text-[32px] font-medium lg:pr-24 w-1/2 font-manrope">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>

          <div className="text-lg font-medium w-1/2">
            <div className="border-b flex justify-between py-5">
              <span>We connect our customers with the best?</span>
              <img
                src={Check}
                className="bg-[#0A2640] py-2.5 rounded-full px-2"
              />
            </div>

            <div className="border-b flex justify-between py-5">
              <span>Android research & development rockstar?</span>
              <img
                src={Check}
                className="bg-[#0A2640] py-2.5 rounded-full px-2"
              />
            </div>
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
