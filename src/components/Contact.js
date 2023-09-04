import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import whatsapp from "../asetss/Iconos/whatsapp.png";
import phone from "../asetss/Iconos/Phone.png";
import email from "../asetss/Iconos/email.png";

import "./styles/Contact.css";
import Whatsapp from "./Whatsapp";
import Form from "./Form";
const Contact = () => {
  return (
    <>
      <Whatsapp />
      <Container className="d-flex justify-content-center align-items-center">
        <h1 class="display-1 text-center mt-5 fw-bold contact-text">
          Contáctanos
        </h1>
      </Container>
      <Form></Form>
      <Container className=" mt-5 text-center">
        <Row>
          <Col md={6}>
            <img src={phone} alt="Phone" class="img-fluid mt-5" />
            <p class="lead fw-bold mt-5">(+57) 317 383 5387</p>
          </Col>
          <Col md={6}>
            <img src={email} alt="email" class="img-fluid mt-5" />
            <a
              href="mailto:Cortinashousedeco@gmail.com"
              class="text-decoration-none text-dark"
            >
              <p class=" lead fw-bold mt-5">Cortinashousedeco@gmail.com</p>
            </a>
          </Col>
        </Row>
      </Container>
      <Container
        className="d-flex align-items-center justify-content-center text-center m-4 px-4 bg-gris-medio 
        container-second mx-auto product"
      >
        <a
          href="https://api.whatsapp.com/send?phone=573103907980&text=¡Hola!%20estoy%20interesado%20en%20los%20productos%20de%20House%20Deco.%20Me%20puedes%20brindar%20mayor%20información🏠"
          class="text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <div class="d-flex align-items-center">
            <img src={whatsapp} alt="whatsapp" class="img-fluid me-2" />
            <p class="lead fw-bold text-white mt-4">Whatsapp Aquí</p>
          </div>
        </a>
      </Container>
    </>
  );
};

export default Contact;
