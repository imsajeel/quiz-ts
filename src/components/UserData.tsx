import React, { useState } from "react";

export default function UserData() {
  const [values, setValues] = useState({ name: "" });

  const onChange = () => {};

  const onSubmit = () => {};

  return (
    <div className=".container w-11/12 md:w-1/2 bg-gray-100 rounded-lg py-10 mx-auto my-10 p-5 shadow-lg">
      <h1 className="text-center text-3xl">Quiz form</h1>
      <form>
        <label
          className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
          htmlFor="inline-full-name"
        >
          Full Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          name="name"
          type="text"
          placeholder="John Doe"
        />
        <label
          className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
          htmlFor="inline-full-name"
        >
          Select Difficulty
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div>
          <div className="w-full mt-5 text-center">
            <button
              style={{ width: "100%", maxWidth: "500px" }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Enter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
