import React from "react";
import image1 from "../../asetss/Cortina Enrrollable Blackout/Galeria/1.jpg";
import image2 from "../../asetss/Cortina Enrrollable Blackout/Galeria/2.jpg";
import image3 from "../../asetss/Cortina Enrrollable Blackout/Galeria/3.jpg";
import image4 from "../../asetss/Cortina Enrrollable Blackout/Galeria/4.jpg";
import image5 from "../../asetss/Cortina Enrrollable Blackout/Galeria/5.jpg";
import image6 from "../../asetss/Cortina Enrrollable Blackout/Galeria/6.jpg";
import image7 from "../../asetss/Cortina Enrrollable Blackout/Galeria/7.jpg";
import image8 from "../../asetss/Cortina Enrrollable Blackout/Galeria/8.jpg";

import Banner from "../../asetss/Cortina Enrrollable Blackout/banner.jpg";

import mecanismo1 from "../../asetss/Cortina Enrrollable Blackout/Mecanismo-cortina-1.jpg";
import mecanismo2 from "../../asetss/Cortina Enrrollable Blackout/Mecanismo-cortina-2.jpg";
import mecanismo3 from "../../asetss/Cortina Enrrollable Blackout/Mecanismo-cortina-3.jpg";

import { Row, Col } from "react-bootstrap";
import Slider from "../Slider";
import Caracteristicas from "./Caracteristicas";
import SimpleBanner from "../SimpleBanner.js";
import Carousel from "./Carousel";
import Razon from "../Razon";

import espacio from "../../asetss/Iconos/espacio.png";
import luz from "../../asetss/Iconos/Luz.png";
import Mecanismo from "../../asetss/Iconos/Mecanismo.png";
import Garantia from "../../asetss/Iconos/Garantia.png";
import "../styles/Product.css"
import Whatsapp from "../Whatsapp";

const Enrollable = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const sliderUmages = [mecanismo1, mecanismo2, mecanismo3];

  return (
    <>
      {" "}
      <Whatsapp />
      <SimpleBanner
        image={Banner}
        text="CORTINA ENROLLABLE BLACKOUT"
        link="enrollable"
      />
      <div className=" bg-pink " style={{ height: "30px" }}></div>
      <Row>
        <Col md={6}>
          <Carousel images={sliderUmages}  />
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Row className="align-items-center">
            <Col md={6}>
              <Caracteristicas
                imageSrc={espacio}
                title="Espacios:"
                description="Residenciales y comerciales"
              />
              <Caracteristicas
                imageSrc={luz}
                title=""
                description="Perfecto control de luz para facilitar nuestro descanso."
              />
            </Col>
            <Col md={6}>
              <Caracteristicas
                imageSrc={Mecanismo}
                title="Mecanismo:"
                description="manual y motorizado."
              />
              <Caracteristicas
                imageSrc={Garantia}
                title="Garantia:"
                description="dos años"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Razon />
      <Slider images={images} />
    </>
  );
};

export default Enrollable;
