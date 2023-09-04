import React from "react";
import { useState } from "react";
import { Image, Carousel } from "react-bootstrap";
import Banner1 from "../asetss/Home/Banner/banner-1.jpg";
import Banner2 from "../asetss/Home/Banner/banner-2.jpg";
import Banner3 from "../asetss/Home/Banner/banner-3.jpg";
import Asesoria from "./Asesoria";
import "./styles/Banner.css";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}    >
      <Carousel.Item>
        <Image
          src={Banner1}
          alt="Creamos juntos tu espacio"
          className="img-fluid w-100"

          
        />
        <Carousel.Caption className="caption-banner">
          <h3 className="display-3 my-5">CREAMOS JUNTOS TU ESPACIO </h3>
          <Asesoria />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Banner2} alt="Servicio de lavado"  className="img-fluid w-100" />
        <Carousel.Caption className="caption-banner">
          <h3 className="display-3 my-5">SERVICIO DE LAVADO</h3>
          <Asesoria />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={Banner3}
          alt="Asesoria personalizada"
         
          className="img-fluid w-100"
        />
        <Carousel.Caption className="caption-banner">
          <h3 className="display-3 my-5">ASESORÍA PERSONALIZADA</h3>
          <Asesoria />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
