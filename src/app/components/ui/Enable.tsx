import React from "react";
import { useState } from "react";
import FullCard from "./FullCard";

export default function Enable() {
  const [next, setNext] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNext((prev) => !prev);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex w-full h-full z-10">
      {!next && (
        <div className=" w-full h-full grid grid-cols-2 grid-rows-2">
          <FullCard
            title="Strategic Communication & Public Relations"
            image="/publicRelations.jpg"
          />
          <FullCard
            title="Public Policy & Regulatory Affairs"
            image="/publicRelations.jpg"
          />
          <FullCard
            title="Research & Collateral Development"
            image="/publicRelations.jpg"
          />
          <FullCard
            title="Digital Communications"
            image="/publicRelations.jpg"
          />
        </div>
      )}
      {next && (
        <div className=" w-full h-full grid grid-cols-2">
        <FullCard
          title="Talent Nexus Solutions"
          image="/publicRelations.jpg"
        />
        <FullCard
          title="Graphics Designing"
          image="/publicRelations.jpg"
        />
        </div>
      )}

      <div className="absolute bottom-0 mb-10 w-full h-fit flex m-auto text-center justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-12 cursor-pointer hover:scale-105 duration-200"
          onClick={() => setNext(false)}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-12 cursor-pointer hover:scale-105 duration-200"
          onClick={() => setNext(true)}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
