import React from "react";
import Banner from "../../asetss/PANEL JAPONES/PANEL-JAPONES.jpg";

import mecanismo1 from "../../asetss/PANEL JAPONES/Ejemplo-de-cortina-1.jpg";
import mecanismo2 from "../../asetss/PANEL JAPONES/Ejemplo-de-cortina-2.jpg";
import mecanismo3 from "../../asetss/PANEL JAPONES/Ejemplo-de-cortina-3.jpg";

import image1 from "../../asetss/PANEL JAPONES/Galeria/1.jpg";
import image2 from "../../asetss/PANEL JAPONES/Galeria/2.jpg";
import image3 from "../../asetss/PANEL JAPONES/Galeria/3.jpg";
import image4 from "../../asetss/PANEL JAPONES/Galeria/4.jpg";
import image5 from "../../asetss/PANEL JAPONES/Galeria/5.jpg";
import image6 from "../../asetss/PANEL JAPONES/Galeria/6.jpg";
import image7 from "../../asetss/PANEL JAPONES/Galeria/7.jpg";
import image8 from "../../asetss/PANEL JAPONES/Galeria/8.jpg";
import image9 from "../../asetss/PANEL JAPONES/Galeria/8.jpg";

import { Row, Col } from "react-bootstrap";
import Slider from "../Slider";
import Caracteristicas from "./Caracteristicas";
import SimpleBanner from "../SimpleBanner.js";
import Carousel from "./Carousel";

import espacio from "../../asetss/Iconos/espacio.png";
import Mecanismo from "../../asetss/Iconos/Mecanismo.png";
import ventana from "../../asetss/Iconos/ventana.png";
import Apertura from "../../asetss/Iconos/Apertura.png";
import oriental from "../../asetss/Iconos/oriental.png";

import "../styles/Product.css";
import Whatsapp from "../Whatsapp";
const Japones = () => {
  const sliderUmages = [mecanismo1, mecanismo2, mecanismo3];
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  return (
    <>
    <Whatsapp />
      <SimpleBanner image={Banner} text="PANEL JAPONÉS" />

      <div className=" bg-pink " style={{ height: "30px" }}></div>
      <Row>
        <Col md={6}>
          <Carousel images={sliderUmages} />
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Row className="">
            <Col md={6}>
              <Caracteristicas
                imageSrc={espacio}
                title="Espacios:"
                description="Residenciales y comerciales"
              />

              <Caracteristicas
                imageSrc={oriental}
                title=""
                description="Cortinas modernas ideales para espacios elegantes y minimalistas."
              />
            </Col>
            <Col md={6}>
              <Caracteristicas
                imageSrc={Mecanismo}
                title="Mecanismo:"
                description="
                manual y motorizado."
              />
              <Caracteristicas
                imageSrc={ventana}
                title=""
                description="Está constituida por telas superpuestas 
                con sistema funcional ideal para ventanas 
                de gran tamaño."
              />
            </Col>
            <Caracteristicas
              imageSrc={Apertura}
              title=""
              description="Versatilidad de apertura."
            />
          </Row>
        </Col>
      </Row>

      <Slider images={images} />
    </>
  );
};

export default Japones;
