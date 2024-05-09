"use client";
import Image from "next/image";
export default function Home() {
  const fetchData = async () => {
    console.log("CLICKED");
    const res = await fetch("http://localhost:8080/download");
    console.log(res);
    return res.json();
  };
  return (
    <main>
      <div className="flex  flex-col items-center border-2 max-w-screen-md m-auto border-black-500  p-24 gap-2">
        <h1 className=" font-bold ">
          YTDOWNLOADER - Descargador de videos de YouTube
        </h1>
        <p>Descarga videos de YouTube en MP3 y MP4 de alta calidad gratis</p>

        <div className="bg-white p-4 text-center ">
          <div className=" border-red-500 border-2">
            <input
              type="text"
              placeholder="Pegar enlace de youtube aqui"
              className="px-4 mr-2 outline-none w-96 "
            />
            <button className="bg-red-500 text-white p-2" onClick={fetchData}>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
