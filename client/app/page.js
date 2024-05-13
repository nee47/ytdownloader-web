"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    const url = `http://localhost:8080/api/search/${encodeURIComponent(
      inputValue
    )}`;

    try {
      const res = await fetch(url, {
        next: {
          revalidate: 0,
        },
      });

      console.log(res);
      const r = await res.json();

      if (res.ok) {
        console.log(r);
        router.push(
          `/download?title=${encodeURIComponent(r.title)}&url=${
            r.url
          }&thumbnailUrl=${r.imageSource}`
        );
        return r;
      } else {
        console.log(r.errorcito);
        setLoading(false);
      }
    } catch (error) {
      console.log("entramos a error");
      setLoading(false);
      //console.log(error)
    }
  };

  return (
    <main>
      <div className="flex  flex-col items-center border-2 max-w-screen-md m-auto border-black-500  p-24 gap-2">
        <h1 className=" font-bold ">
          YTDOWNLOADER - Descargador de videos de YouTube
        </h1>
        <p>Descarga videos de YouTube en MP3 y MP4 de alta calidad gratis</p>
        <div className="text-center ">
          <div className="flex flex-col md:flex-row  border-red-500  border-2">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Pegar enlace de youtube aqui"
              className="outline-none w-96 text-center"
            />
            <button className="bg-red-500 text-white p-2 relative" onClick={fetchData}>
              {loading?<div className="w-6 h-6 border-2 border-l-0 border-r-0 rounded-full animate-spin relative top-0 bottom-0 left-0 right-0 m-auto">
              </div>: "Buscar"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
