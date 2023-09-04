import React from "react";
import Banner from "../../asetss/CORTINA SHEER ELEGANCE/CORTINA-SHEER-ELEGANCE.jpg";
import mecanismo1 from "../../asetss/CORTINA SHEER ELEGANCE/Mecanismo-cortina-1.jpg";
import mecanismo2 from "../../asetss/CORTINA SHEER ELEGANCE/Mecanismo-cortina-2.jpg";
import mecanismo3 from "../../asetss/CORTINA SHEER ELEGANCE/Mecanismo-cortina-3.jpg";
import image1 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/1.jpg";
import image2 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/2.jpg";
import image3 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/3.jpg";
import image4 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/4.jpg";
import image5 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/5.jpg";
import image6 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/6.jpg";
import image7 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/7.jpg";
import image8 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/8.jpg";
import image9 from "../../asetss/CORTINA SHEER ELEGANCE/Galeria/9.jpg";

import { Row, Col } from "react-bootstrap";
import Slider from "../Slider";
import Caracteristicas from "./Caracteristicas";
import SimpleBanner from "../SimpleBanner.js";
import Carousel from "./Carousel";

import espacio from "../../asetss/Iconos/espacio.png";
import luz from "../../asetss/Iconos/Luz.png";
import Mecanismo from "../../asetss/Iconos/Mecanismo.png";
import Garantia from "../../asetss/Iconos/Garantia.png";
import Elegante from "../../asetss/Iconos/Elegante.png";
import privacidad from "../../asetss/Iconos/privacidad.png";

import "../styles/Product.css";
import Whatsapp from "../Whatsapp";

const Sheer = () => {
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
      <SimpleBanner image={Banner} text="CORTINA SHEER ELEGANCE" />

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
                imageSrc={Mecanismo}
                title="Mecanismo:"
                description="manual y motorizado."
              />
              <Caracteristicas
                imageSrc={Elegante}
                title=""
                description="Cortinas modernas ideales para espacios elegantes y minimalistas."
              />
            </Col>
            <Col md={6}>
              <Caracteristicas
                imageSrc={Garantia}
                title="Garantia:"
                description="dos años"
              />
              <Caracteristicas
                imageSrc={luz}
                title=""
                description="Sistema de cortina enrollable de doble celda que permite controlar el ingreso de luz."
              />
              <Caracteristicas
                imageSrc={privacidad}
                title=""
                description="Ofrece privacidad en el espacio generando un ambiente cálido. "
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Slider images={images} />
    </>
  );
};

export default Sheer;
