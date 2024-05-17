"use client";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-red-100 flex justify-center mt-14 py-10">
        <div className=" max-w-screen-sm">
          <article className="p-6">
            <h2 className="font-bold text-center">
              Descargador de videos GRATIS
            </h2>
            <p className="py-6 text-gray-700 ">
              Herramienta para descargar videos de Youtube de manera sencilla,
              rápida y totalmente gratis. No necesitas registrate ni descargar
              algun otro programa.
            </p>
          </article>

          <div className="p-6">
            <h2 className="font-bold text-center">
              ¿Comó usar? ¿Cómo funciona?
            </h2>

            <ul className=" text-center p-6">
              <li>📍 Ingresas el link en el buscador</li>
              <li>📍Seleccionas una de las resoluciones</li>
              <li>
                📍 YTdownloader tratará de conseguir el video en la calidad
                seleccionada o la mejor calidad no superior a la seleccionada.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
