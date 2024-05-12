"use client";
import React, { useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";

function page() {
  const [selectedCheckbox, setSelectedCheckbox] = useState("option1");

  const handleCheckboxChange = (checkboxValue) => {
    setSelectedCheckbox(checkboxValue);
  };

  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const url = searchParams.get("url");
  const thumbnail = searchParams.get("thumbnailUrl");
  
  return (
    <div>
      <div className=" max-w-screen-md m-auto border-black-500">
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded shadow-md gap-6">
          <div className="flex items-center justify-center  space-x-4 mb-4">
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

          <div className="flex flex-col items-center gap-6">
            <h2>{title}</h2>
            <img src={thumbnail} alt="thumbnail" />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-56">
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
