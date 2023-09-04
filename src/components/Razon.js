import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./styles/Razon.css";
import edificio from "../asetss/Nosotros/Edificio-icono.png";
import Mensaje from "../asetss/Nosotros/Mensaje-icono.png";
import paleta from "../asetss/Nosotros/paleta-icono.png";
import trabajo from "../asetss/Nosotros/Trabajo-icono.png";
import respaldo from "../asetss/Nosotros/Respaldo.png";
import tendencia from "../asetss/Nosotros/Tendencia-icono.png";
const Razon = () => {
  return (
    <div className="overflow-hidden razones d-flex justify-content-center align-items-center pt-5 pb-5">
      <Row className="align-items-center">
        <Col md={5} xs={12}>
          <Container>
            <h4 class="text-white text-center display-1">
              ¿Por qué House Deco?
            </h4>
          </Container>
        </Col>
        <Col md={6} xs={12}>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <Row className="cards d-flex align-items-center w-100 ">
                  <Col md={4} xs={4}>
                    <img
                      src={edificio}
                      alt="Fabricas"
                      width={75}
                      height={75}
                      class="img-fluid mr-3"
                    />
                  </Col>
                  <Col md={8} xs={8}>
                    <p class="text-start">
                      Contamos con el respaldo de las mejores fábricas en
                      Medellín, Colombia.
                    </p>
                  </Col>
                </Row>
                <Row className="cards d-flex align-items-center w-100 ">
                  <Col md={4} xs={4}>
                    <img
                      src={Mensaje}
                      alt="Valoración de espacio "
                      width={60}
                      height={60}
                      class="img-fluid mr-3"
                    />
                  </Col>
                  <Col md={8} xs={8}>
                    <p class="text-start">
                      Valoración de tus espacios y asesoría.
                    </p>
                  </Col>
                </Row>

                <Row className="cards d-flex align-items-center w-100 ">
                  <Col md={4} xs={4}>
                    <img
                      src={paleta}
                      alt="Diseño"
                      width={60}
                      height={60}
                      class="img-fluid mr-3"
                    />
                  </Col>
                  <Col md={8} xs={8}>
                    <p class="text-start">Diseñamos especialmente para ti.</p>
                  </Col>
                </Row>
              </Col>

              <Col md={6} xs={12}>
                <Row className="cards d-flex align-items-center w-100 ">
                  <Col md={4} xs={4}>
                    <img
                      src={trabajo}
                      alt="Decoradores profesionales"
                      width={60}
                      height={60}
                      class="img-fluid mr-3"
                    />
                  </Col>
                  <Col md={8} xs={8}>
                    <p class="text-start">
                      Grupo de decoradores profesionales a tu disposición
                    </p>
                  </Col>
                </Row>
                <Row className="cards d-flex align-items-center w-100 ">
                  <Col md={4} xs={4}>
                    <img
                      src={respaldo}
                      alt="Respaldo por House Deco"
                      width={60}
                      height={60}
                      class="img-fluid mr-3"
                    />
                  </Col>
                  <Col md={8} xs={8}>
                    <p class="text-start">
                      Te acompañamos y te respaldamos en todo momento.
                    </p>
                  </Col>
                </Row>

                <Row className="cards d-flex align-items-center w-100 ">
                  <Col md={4} xs={4}>
                    <img
                      src={tendencia}
                      alt="Ultimas tendencias"
                      width={60}
                      height={60}
                      class="img-fluid mr-3"
                    />
                  </Col>
                  <Col md={8} xs={8}>
                    <p class="text-start">
                      Nos mantenemos actualizados en las últimas tendencias.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Razon;
