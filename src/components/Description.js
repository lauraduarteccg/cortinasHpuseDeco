import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nosotros from "../asetss/Nosotros/House-deco1.jpg";


const Description = () => {
  return (
    <div className="overflow-hidden bg-white py-3">
      <Container className="d-flex justify-content-center bg-white mt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <div class="img">
              <img class="img-fluid" src={nosotros} alt="House Deco" />
              <div class="centered">
                <a
                  href="https://api.whatsapp.com/send?phone=573103907980&text=¡Hola!%20estoy%20interesado%20en%20los%20productos%20de%20House%20Deco.%20Me%20puedes%20brindar%20mayor%20información🏠"
                  class="text-white  fs-4 text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 class="text-white btn-asesoria btn- fs-6">
                    Agenda tu asesoría
                  </h2>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="mt-5">
            <h3 class="text-center fw-bold fs-1 font-pink">
              CORTINAS Y PERSIANAS HOUSE DECO
            </h3>
            <div class="text-justify mx-4 my-5">
              <p class="">
                Somos una empresa con 13 años de experiencia en el mercado,
                brindando a nuestros clientes una asesoría profesional
                garantizando productos de excelente calidad y con respaldo de
                las mejores fábricas en Medellín,Colombia.
              </p>
              <p class="">
                De la mano de decoradores profesionales brindamos un
                acompañamiento al momento de transformar tus espacios
                corporativos y residenciales con una amplia oferta de productos
                y así enfocándonos en la satisfacción de nuestros clientes.
              </p>
              <p class="">
                Convencidos que el servicio postventa es nuestro sello de
                garantía.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
