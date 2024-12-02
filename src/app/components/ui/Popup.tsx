import React from "react";

export default function Popup() {
  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg shadow-lg bg-black`}
    >
      <p className="text-center text-sm font-medium">
        This is a popup message!
      </p>
    </div>
  );
}
