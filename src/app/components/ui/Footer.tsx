interface FooterProps {
  theme: "dark" | "light";
}

export default function Footer({ theme }: FooterProps) {
  const phone = 7888312479;

  return theme == "dark" ? (
    <>
      <div className="flex flex-row w-full h-[400px] bg-black">
        <div className="w-[25%] h-full p-10">
          <p className="text-2xl font-black text-white">Ardent Co.</p>
          <p className="text-sm font-medium text-white">
            Communications, Research and Public Policy Advisory
          </p>

          <p className="text-sm font-medium text-white mt-5">
            Ardent Co. is a communications, research and public policy advisory
            which enables clients in achieving purpose driven engagements.
          </p>

          <div className="flex flex-row mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-7 translate-y-1"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-2xl font-bold text-white ml-2">{phone}</p>
          </div>
        </div>

        <div className=" w-[25%] h-full p-10 gap-4 ">
          <p className="text-2xl font-bold text-white ml-2 mb-10">
            Quick Links
          </p>
          <div className="flex flex-col gap-4 text-neutral-400">
            <p className="font-bold ml-2 cursor-pointer">Privacy Policy</p>
            <p className="font-bold ml-2 cursor-pointer">Terms & Conditions</p>
            <p className="font-bold ml-2 cursor-pointer">Support</p>
            <p className="font-bold ml-2 cursor-pointer">Contact us</p>
          </div>
        </div>

        <div className=" w-[25%] h-full p-10 gap-4 0">
          <p className="text-2xl font-bold text-white ml-2 mb-10">
            Information
          </p>
          <div className="flex flex-col gap-4 text-neutral-400">
            <p className="font-bold ml-2 cursor-pointer">About us</p>
            <p className="font-bold ml-2 cursor-pointer">Customer</p>
            <p className="font-bold ml-2 cursor-pointer">Service</p>
            <p className="font-bold ml-2 cursor-pointer">Collection</p>
            <p className="font-bold ml-2 cursor-pointer">Blog</p>
            <p className="font-bold ml-2 cursor-pointer">Best Sellers</p>
          </div>
        </div>

        <div className=" w-[25%] h-full p-10 gap-4">
          <p className="text-2xl font-bold text-white ml-2 mb-10">
            Get in Touch
          </p>
          <div className="flex flex-col gap-4 text-neutral-400">
            <div className="flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-6 mb-2"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="font-bold ml-2 cursor-pointer">
                1e/23, 110055, near Metro Station Jhandewalan, Block E 1,
                Jhandewalan Extension, Karol Bagh, New Delhi, Delhi 110055
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-5 translate-y-1"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-bold ml-2 cursor-pointer">{phone}</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="font-bold ml-2 cursor-pointer">
                contactus@ardentco.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex flex-row w-full h-[400px] bg-white">
        <div className="w-[25%] h-full p-10">
          <p className="text-2xl font-black text-black">Ardent Co.</p>
          <p className="text-sm font-medium text-black">
            Communications, Research and Public Policy Advisory
          </p>

          <p className="text-sm font-medium text-black mt-5">
            Ardent Co. is a communications, research and public policy advisory
            which enables clients in achieving purpose driven engagements.
          </p>

          <div className="flex flex-row mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-7 translate-y-1"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-2xl font-bold text-black ml-2">{phone}</p>
          </div>
        </div>

        <div className=" w-[25%] h-full p-10 gap-4 ">
          <p className="text-2xl font-bold text-black ml-2 mb-10">
            Quick Links
          </p>
          <div className="flex flex-col gap-4 text-neutral-600">
            <p className="font-bold ml-2 cursor-pointer">Privacy Policy</p>
            <p className="font-bold ml-2 cursor-pointer">Terms & Conditions</p>
            <p className="font-bold ml-2 cursor-pointer">Support</p>
            <p className="font-bold ml-2 cursor-pointer">Contact us</p>
          </div>
        </div>

        <div className=" w-[25%] h-full p-10 gap-4 0">
          <p className="text-2xl font-bold text-black ml-2 mb-10">
            Information
          </p>
          <div className="flex flex-col gap-4 text-neutral-600">
            <p className="font-bold ml-2 cursor-pointer">About us</p>
            <p className="font-bold ml-2 cursor-pointer">Customer</p>
            <p className="font-bold ml-2 cursor-pointer">Service</p>
            <p className="font-bold ml-2 cursor-pointer">Collection</p>
            <p className="font-bold ml-2 cursor-pointer">Blog</p>
            <p className="font-bold ml-2 cursor-pointer">Best Sellers</p>
          </div>
        </div>

        <div className=" w-[25%] h-full p-10 gap-4">
          <p className="text-2xl font-bold text-black ml-2 mb-10">
            Get in Touch
          </p>
          <div className="flex flex-col gap-4 text-neutral-600">
            <div className="flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-6 mb-2"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="font-bold ml-2 cursor-pointer">
                1e/23, 110055, near Metro Station Jhandewalan, Block E 1,
                Jhandewalan Extension, Karol Bagh, New Delhi, Delhi 110055
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-5 translate-y-1"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-bold ml-2 cursor-pointer">{phone}</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="font-bold ml-2 cursor-pointer">
                contactus@ardentco.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
