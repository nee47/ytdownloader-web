"use client";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import React, { useState } from 'react';

export default function Home() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const router = useRouter();

  const fetchData = async () => {

    const url = `http://localhost:8080/api/search/${encodeURIComponent(inputValue)}`;

    try {
      const res = await fetch(url, {
        next: {
          revalidate: 0
        }
      });

      console.log(res);
      const r = await res.json();
      
      if(res.ok){
        
        console.log(r);
        router.push(`/download?title=${encodeURIComponent(r.title)}&url=${r.url}&thumbnailUrl=${r.imageSource}`);
        return r;
      }
      else{
        console.log(r.errorcito)
      }
      
    } catch (error) {
      console.log("entramos a error");
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

        <div className="bg-white p-4 text-center ">
          <div className=" border-red-500 border-2">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Pegar enlace de youtube aqui"
              className="px-4 mr-2 outline-none w-96 "
            />
            <button className="bg-red-500 text-white p-2" onClick={ fetchData}>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
