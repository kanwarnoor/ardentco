import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  role?: string;
  blurdata?: string | "";
  theme?: "dark" | "light";
}

export default function Person({ name, image, role, blurdata, theme }: Props) {
  return (
    <div
      className={`w-fit h-fit flex flex-col m-auto justify-center items-center ${
        theme == "dark" ? "text-black" : "text-white"
      }`}
    >
      <div className="md:w-32 md:h-32 w-20 h-20 rounded-full bg-black flex">
        <Image
          src={image}
          width={0}
          height={0}
          {...(blurdata ? { blurDataURL: blurdata, placeholder: "blur" } : {})}
          alt={""}
          sizes="100% 100%"
          className="w-full h-full rounded-full"
        ></Image>
      </div>
      <p className="md:text-xl text-lg font-black text-center leading-3 mt-2">
        {name}
      </p>
      <p className="md:text-lg text-base font-bold opacity-80 text-center">
        {role}
      </p>
    </div>
  );
}
