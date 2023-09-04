import React from "react";
import Banner from "../../asetss/PERSIANAS EN MADERA Y ALUMINIO/PERSIANAS-EN-MADERA-Y-ALUMINIO.jpg";

import mecanismo1 from "../../asetss/PERSIANAS EN MADERA Y ALUMINIO/Ejemplo-de-persiana-1.jpg";
import mecanismo2 from "../../asetss/PERSIANAS EN MADERA Y ALUMINIO/Ejemplo-de-persiana-2.jpg";
import mecanismo3 from "../../asetss/PERSIANAS EN MADERA Y ALUMINIO/Ejemplo-de-persiana-3.jpg";

import { Row, Col } from "react-bootstrap";
import Caracteristicas from "./Caracteristicas";
import SimpleBanner from "../SimpleBanner.js";
import Carousel from "./Carousel";

import Persiana from "../../asetss/Iconos/Persiana.png";
import Materiales from "../../asetss/Iconos/Materiales.png";
import Elegante from "../../asetss/Iconos/Elegante.png";
import Tonalidades from "../../asetss/Iconos/Tonalidades.png";

import "../styles/Product.css";
import Whatsapp from "../Whatsapp";
const Persianas = () => {
  const sliderUmages = [mecanismo1, mecanismo2, mecanismo3];

  return (
    <>
    <Whatsapp />
      <SimpleBanner image={Banner} text="PERSIANAS EN MADERA Y ALUMINIO" />

      <div className=" bg-pink " style={{ height: "30px" }}></div>
      <Row>
        <Col md={6}>
          <Carousel images={sliderUmages} />
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Row className=" bg-white">
            <Col md={6}>
              <Caracteristicas
                imageSrc={Persiana}
                title=""
                description="Persianas en láminas de 25 mm y 5 cm 
                perforadas y sin perforar."
              />
              <Caracteristicas
                imageSrc={Elegante}
                title=""
                description="Elegancia y distinción para potenciar calidez y naturalidad en los espacios"
              />
            </Col>
            <Col md={6}>
              <Caracteristicas
                imageSrc={Materiales}
                title=""
                description="Materiales de alta resistencia 
                y durabilidad."
              />
              <Caracteristicas
                imageSrc={Tonalidades}
                title=""
                description="Variedad en tonalidades"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Persianas;
