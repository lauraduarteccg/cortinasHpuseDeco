import React from "react";
import "./styles/Main.css";
import Info from "./Info"
import Gallery from "./Gallery";
import Banner from "./Banner";
import Whatsapp from "./Whatsapp"
import Razon from "./Razon"

const Main = () => {
  return (
    <>
    <Whatsapp />
    <Banner />
      <div class="overflow-hidden nosotros ">
        <h2 class="text-start fs-4 text-white mt-5 text-center mb-5 ">
          Somos una empresa con 13 años de experiencia en el mercado, brindando
          a nuestros clientes una asesoría profesional garantizando productos de
          excelente calidad y con respaldo de las mejores fábricas en Medellín,Colombia.
        </h2>
      </div>
      <Gallery />
      <Razon />
      <Info />
     
    </>
  );
};

export default Main;
 