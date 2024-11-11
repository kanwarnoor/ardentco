import Link from "next/link";

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

          <div className="w-full h-fit ml-2 mb-4 flex space-x-2">
            <Link href="https://www.instagram.com/_ardentco._/" target="_blank">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="px"
                y="px"
                viewBox="0 0 56.7 56.7"
                enableBackground="new 0 0 56.7 56.7"
                xmlSpace="preserve"
                className="size-8"
                fill="white"
              >
                <g>
                  <path
                    d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                  />
                  <circle cx="41.5" cy="16.4" r="2.9" />
                  <path
                    d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                  />
                </g>
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/ardentco"
              target="_blank"
            >
              <svg
                enableBackground="new 0 0 56.693 56.693"
                height="56.693px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 56.693 56.693"
                width="56.693px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="white"
                className="size-8"
              >
                <g>
                  <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                  <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                </g>
              </svg>
            </Link>

            <Link href="https://www.facebook.com/ardentco.in" target="_blank">
              <svg
                fill="white"
                height="17"
                viewBox="0 0 17 17"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
                className="size-8"
              >
                <path
                  d="M14.1762 0.823608H2.68022C2.08296 0.823608 1.51015 1.06087 1.08782 1.4832C0.665486 1.90554 0.428223 2.47834 0.428223 3.07561V14.5716C0.428223 15.1689 0.665486 15.7417 1.08782 16.164C1.51015 16.5863 2.08296 16.8236 2.68022 16.8236H7.91222V10.9836H5.93422V8.70561H7.91222V7.02761C7.91222 6.07661 8.17522 5.33761 8.70122 4.81261C9.22722 4.28661 9.94022 4.02261 10.8412 4.02261C11.7432 4.02261 12.3272 4.05761 12.5942 4.12361V6.15161H11.3922C10.9582 6.15161 10.6622 6.24361 10.5032 6.42761C10.3452 6.61061 10.2662 6.88661 10.2662 7.25361V8.70561H12.5192L12.2192 10.9836H10.2662V16.8236H14.1762C14.7735 16.8236 15.3463 16.5863 15.7686 16.164C16.191 15.7417 16.4282 15.1689 16.4282 14.5716V3.07561C16.4282 2.47834 16.191 1.90554 15.7686 1.4832C15.3463 1.06087 14.7735 0.823608 14.1762 0.823608Z"
                  fill="white"
                />
              </svg>
            </Link>

            <Link href="https://x.com/_ardent_co_" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1200"
                height="1227"
                viewBox="0 0 1200 1227"
                fill="white"
                className="size-8"
              >
                <g clip-path="url(#clip0_1_2)">
                  <path
                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2">
                    <rect width="1200" height="1227" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-neutral-400">
            <div className="flex flex-col">
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
                className="size-5 translate-y-1 translate-x-2 mr-2"
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
                className="size-6 translate-x-1 mr-1"
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
