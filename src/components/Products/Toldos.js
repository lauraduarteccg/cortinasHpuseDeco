import React from "react";
import Banner from "../../asetss/TOLDOS/TOLDOS.jpg";

import mecanismo1 from "../../asetss/TOLDOS/Ejemplo-toldo-1.jpg";
import mecanismo2 from "../../asetss/TOLDOS/Ejemplo-toldo-2.jpg";
import mecanismo3 from "../../asetss/TOLDOS/Ejemplo-toldo-3.jpg";

import { Row, Col } from "react-bootstrap";
import Caracteristicas from "./Caracteristicas";
import SimpleBanner from "../SimpleBanner.js";
import Carousel from "./Carousel";

import Garantia from "../../asetss/Iconos/Garantia.png";
import calidad from "../../asetss/Iconos/Alta-calidad.png";
import espacio from "../../asetss/Iconos/espacio.png";
import mecanismo from "../../asetss/Iconos/Mecanismo.png";

import "../styles/Product.css";
import Whatsapp from "../Whatsapp";

const Toldos = () => {
  const sliderUmages = [mecanismo1, mecanismo2, mecanismo3];

  return (
    <>
    <Whatsapp />
      <SimpleBanner image={Banner} text="TOLDOS" />

      <div className=" bg-pink " style={{ height: "30px" }}></div>
      <Row>
        <Col md={6}>
          <Carousel images={sliderUmages} />
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Row>
            <Col md={6}>
              <Caracteristicas
                imageSrc={Garantia}
                title="Garantia"
                description="dos años"
              />{" "}
              <Caracteristicas
                imageSrc={espacio}
                title=""
                description="Ideal para espacios exteriores."
              />
            </Col>
            <Col md={6}>
            <Caracteristicas
                imageSrc={mecanismo}
                title="Mecanismo:"
                description="
                manual y motorizado."
              />
              <Caracteristicas
                imageSrc={calidad}
                title=""
                description="Lona de alta Calidad."
              />

             
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Toldos;
