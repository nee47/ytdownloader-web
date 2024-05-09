"use client";
import React, { useState } from "react";

function page() {
  const [selectedCheckbox, setSelectedCheckbox] = useState("option1");

  const handleCheckboxChange = (checkboxValue) => {
    setSelectedCheckbox(checkboxValue);
  };
  return (
    <div>
      <div className=" max-w-screen-md m-auto border-black-500 bg-slate-800">
        <div className="p-4 border border-gray-200 rounded shadow-md">
          <div className="flex items-center justify-center  space-x-4 mb-4 text-white">
            <input
              type="checkbox"
              checked={selectedCheckbox === "option1"}
              onChange={() => handleCheckboxChange("option1")}
              className="form-checkbox text-blue-500 h-5 w-5 "
            />
            <label className="">1080p</label>
            <input
              type="checkbox"
              checked={selectedCheckbox === "option2"}
              onChange={() => handleCheckboxChange("option2")}
              className="form-checkbox text-blue-500 h-5 w-5"
            />
            <label className="">720p</label>
            <input
              type="checkbox"
              checked={selectedCheckbox === "option3"}
              onChange={() => handleCheckboxChange("option3")}
              className="form-checkbox text-blue-500 h-5 w-5"
            />
            <label className="">420p</label>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
