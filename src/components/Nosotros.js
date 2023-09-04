import React from "react";
import nosotros from "../asetss/Nosotros/Nosotros.jpg";
import SimpleBanner from "./SimpleBanner";
import Description from "./Description";
import Razon from "./Razon";
import Whatsapp from "./Whatsapp"
const Nosotros = () => {
  return (
    <>
    <Whatsapp />
      <SimpleBanner image={nosotros} text="Acerca de Nosotros" />
      <Description />
      <Razon />
    </>
  );
};

export default Nosotros;
