import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import blackout from "../asetss/Home/Productos/cortina-rollable-blackout.jpg";
import Sheer from "../asetss/Home/Productos/Cortina-Sheer-Elegante.png";
import Japones from "../asetss/Home/Productos/Panel-japones.png";
import Persinas from "../asetss/Home/Productos/Persinas-en-Madera-y-Aluminio.png";
import Peliculas from "../asetss/Home/Productos/Peliculas-de-Control-Solar.png";
import toldos from "../asetss/Home/Productos/Toldos.png";
import "./styles/Gallery.css";
const Gallery = () => {
  return (
    <Container className="my-5 text-center">
      <h3 className="display-6 font-pink mb-5">Conoce nuestras cortinas</h3>
      <Row>
        <Col xs={6} md={4}>
          <a href="/Cortina-Enrollable-Blackout">
            <Image
              src={blackout}
              rounded
              alt="Cortina Enrrollable Blackout"
              className="text-center img-fluid product"
            />
          </a>
          <p class="lead font-pink">Cortina Enrollable Blackout</p>
        </Col>

        <Col xs={6} md={4}>
          <a href="/Cortina-Sheer-Elegante">
            <Image
              src={Sheer}
              rounded
              alt="Cortina Sheer Elegance"
              className="text-center img-fluid product"
            />
          </a>
          <p class="lead font-pink">Cortina Sheer Elegance</p>
        </Col>

        <Col xs={6} md={4}>
          <a href="/Panel-japones">
            <Image
              src={Japones}
              rounded
              alt="Panel japones"
              className="text-center img-fluid product"
            />
          </a>
          <p class="lead font-pink">Panel Japonés</p>
        </Col>

        <Col xs={6} md={4}>
          <a href="/Persianas-en-Madera-y-Aluminio">
            <Image
              src={Persinas}
              rounded
              alt="Persinas en Madera y Aluminio"
              className="text-center img-fluid product"
            />
          </a>
          <p class="lead font-pink">Persinas en Madera y Aluminio</p>
        </Col>

        <Col xs={6} md={4}>
          <a href="/Peliculas-de-Control-Solar">
            <Image
              src={Peliculas}
              rounded
              alt="Películas de Control Solar"
              className="text-center img-fluid product"
            />
          </a>
          <p class="lead font-pink">Películas de Control Solar</p>
        </Col>

        <Col xs={6} md={4}>
          <a href="/Toldos">
            <Image
              src={toldos}
              rounded
              alt="Toldos"
              className="text-center img-fluid product"
            />
          </a>
          <p class="lead font-pink">Toldos</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
