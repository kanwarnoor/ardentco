import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-white text-black py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- Column 1: Company Info --> */}
          <div>
            <h2 className="font-bold text-xl">ARDENT CO.</h2>
            <p className="text-black mt-4">
              Communications, Research and Public Policy Advisory
            </p>
            <p className="mt-4 text-black leading-relaxed">
              Ardent Co. is a communications, research and public policy
              advisory which enables clients in achieving purpose-driven
              engagements.
            </p>
            
            <div className="text-2xl mt-6 flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill=""
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="pl-2">7888312479</p>
            </div>
          </div>

          {/* <!-- Column 2: Quick Links --> */}
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-black ">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 3: Information --> */}
          <div>
            <h3 className="font-bold text-lg">Information</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-black ">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  BestSellers
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 4: Address and Contact --> */}
          <div>
            <h3 className="font-bold text-lg">Our Address</h3>
            <ul className="mt-4 space-y-2 text-black">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline w-5 h-5 mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a5 5 0 0 0-5 5c0 4.418 5 11 5 11s5-6.582 5-11a5 5 0 0 0-5-5zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                test address
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline w-5 h-5 mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 1 .866-.326c.893.337 2.678 1.177 3.771 2.119a16.933 16.933 0 0 1 1.867 1.867c.94 1.093 1.781 2.878 2.119 3.771a.678.678 0 0 1-.326.866l-2.507 1.003a.678.678 0 0 1-.821-.287L6.533 7.56l-1.187-.646-.646-1.187L1.956 3.658a.678.678 0 0 1 .287-.821L3.654 1.328z" />
                </svg>
                +91 7888312479
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline w-5 h-5 mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                  <path d="M8 9.5l4-3H4l4 3z" />
                </svg>
                wellitsnoor@gmail.com
              </li>
            </ul>
            <div className="mt-4 flex space-x-3">
              {/* <!-- Social Icons --> */}

              {/* <!-- Additional icons can go here --> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
