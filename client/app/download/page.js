"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import DownloadButton from "../components/DownloadButton";

function page() {
  const [selectedCheckbox, setSelectedCheckbox] = useState("1080");
  const [downloading, setDownloading] = useState(false);

  const handleCheckboxChange = (checkboxValue) => {
    setSelectedCheckbox(checkboxValue);
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const vidUrl = searchParams.get("url");
  const thumbnail = searchParams.get("thumbnailUrl");

  const toSend = {
    resolution: selectedCheckbox,
    url: vidUrl,
  };

  const downloadVideo = async () => {
    setDownloading(true);
    const backendUrl = `http://localhost:8080/api/download`;
    try {
      const res = await fetch(backendUrl, {
        next: {
          revalidate: 0,
        },
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(toSend),
      });
      const r = await res.json();

      if (res.ok) {
        console.log(r);
        //downloads the vid once the servers finished downloading the vid
        router.push(backendUrl + `/${r.id}`);
        setDownloading(false);
        return r;
      } else {
        console.log(r.errorcito);
        setDownloading(false);
      }
    } catch (error) {
      console.log("server error");
      setDownloading(false);
    }
  };

  return (
    <>
      <div className=" max-w-screen-md m-auto border-black-500">
        <div className="flex flex-col items-center p-16 border border-gray-200 rounded shadow-md gap-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <input
              type="checkbox"
              checked={selectedCheckbox === "1080"}
              onChange={() => handleCheckboxChange("1080")}
              className="form-checkbox text-blue-500 h-5 w-5 "
            />
            <label className="">1080p</label>
            <input
              type="checkbox"
              checked={selectedCheckbox === "720"}
              onChange={() => handleCheckboxChange("720")}
              className="form-checkbox text-blue-500 h-5 w-5"
            />
            <label className="">720p</label>
            <input
              type="checkbox"
              checked={selectedCheckbox === "420"}
              onChange={() => handleCheckboxChange("420")}
              className="form-checkbox text-blue-500 h-5 w-5"
            />
            <label className="">420p</label>
          </div>

          <div className="flex flex-col items-center gap-6">
            <h2>{title}</h2>
            <img src={thumbnail} alt="thumbnail" />
          </div>
          {downloading ? (
            <DownloadButton />
          ) : (
            <button
              type="button"
              disabled={downloading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-56"
              onClick={downloadVideo}
            >
              Descargar
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default page;
