import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-500 ">
      <h1
        className="text-gray-100 text-2xl m-3 md:mx-10 cursor-pointer"
        onClick={() => (window.location.href = "/reload")}
      >
        uQuizy?
      </h1>
    </header>
  );
}
