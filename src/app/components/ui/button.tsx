import React from "react";

interface buttonProps {
  buttonTxt?: string;
  link: string;
}

export default function Button({ buttonTxt, link }: buttonProps) {
  return (
    <a
      href={link}
      className="md:text-xl border-2 font-bold text-ardent bg-none border-ardent px-5 py-2 rounded-full hover:bg-ardent hover:text-black duration-300"
    >
      {buttonTxt ? (
        buttonTxt
      ) : (
        "Know more"
      )}
    </a>
  );
}