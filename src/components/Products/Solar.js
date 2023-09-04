import React from "react";
import Banner from "../../asetss/PELICULAS DE CONTROL SOLAR/PELICULAS-DE-CONTROL-SOLAR.jpg";

import mecanismo1 from "../../asetss/PELICULAS DE CONTROL SOLAR/Ejemplo-pelicula-1.jpg";
import mecanismo2 from "../../asetss/PELICULAS DE CONTROL SOLAR/Ejemplo-pelicula-2.jpg";
import mecanismo3 from "../../asetss/PELICULAS DE CONTROL SOLAR/Ejemplo-pelicula-3.jpg";

import { Row, Col } from "react-bootstrap";
import Caracteristicas from "./Caracteristicas";
import SimpleBanner from "../SimpleBanner.js";
import Carousel from "./Carousel";

import Fabricacion from "../../asetss/Iconos/Fabricacion.png";
import Temperatura from "../../asetss/Iconos/Temperatura.png";
import espacio from "../../asetss/Iconos/espacio.png";
import Seguridad from "../../asetss/Iconos/Seguridad.png";
import Rotura from "../../asetss/Iconos/Rotura.png";

import "../styles/Product.css";
import Whatsapp from "../Whatsapp";
const Solar = () => {
  const sliderUmages = [mecanismo1, mecanismo2, mecanismo3];

  return (
    <>
    <Whatsapp />
      <SimpleBanner image={Banner} text="PELÍCULAS DE CONTROL SOLAR" />

      <div className=" bg-pink " style={{ height: "30px" }}></div>
      <Row>
        <Col md={7}>
          <Carousel images={sliderUmages} style={{ height: "100%" }} />
        </Col>
        <Col
          md={5}
          className="d-flex align-items-center justify-content-center"
        >
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={6}>
              <Caracteristicas
                imageSrc={Fabricacion}
                title=""
                description="Películas de última generación, utilizando nanotecnología en su fabricación"
              />
              <Caracteristicas
                imageSrc={espacio}
                title="Espacios:"
                description="comerciales, residenciales e institucionales."
              />
            </Col>
            <Col md={6}>
              <Caracteristicas
                imageSrc={Temperatura}
                title=""
                description="Ofrece un control de temperatura
                en un 80%."
              />
              <Caracteristicas
                imageSrc={Seguridad}
                title=""
                description="Protege muebles, cuadros y pisos de los rayos UV, sin oscurecer sus espacios."
              />
            </Col>
            <Col
              md={12}
              sm={12}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={Rotura}
                alt="Protección contra rotura de vidrios"
                width="70"
                className="img-fluid"
              />
              <h3 className="font-pink mt-3 text-center">
                Protección contra rotura de vidrios:
              </h3>
              <p className="text-center">
                en caso de que una ventana se rompa, la película te protege a ti
                y a tu familia de fragmentos de vidrio voladores al mantener el
                vidrio unido.
              </p>{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Solar;
