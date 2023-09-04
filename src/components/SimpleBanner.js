import React from "react";
import { Container } from "react-bootstrap";
import "./styles/SimpleBanner.css";

const SimpleBanner = (props) => {
  const { image, text, link } = props;
  const isEnrollable = link === "enrollable";

  return (
    <div className={`overflow-hidden banner${isEnrollable ? " enrollable" : ""}`}>

      <img className="img-fluid" src={image} alt={text} />
      <div className="centered">
        <h1 className="text-white display-3 text-nowrap">{text}</h1>
        {isEnrollable && (
          <>
            {" "}
            <Container>
              <div className="mt-5">
                <a
                  href="https://api.whatsapp.com/send?phone=573103907980&text=¡Hola!%20estoy%20interesado%20en%20los%20productos%20de%20House%20Deco.%20Me%20puedes%20brindar%20mayor%20información🏠" rel="noreferrer"
                  className="text-white btn-asesoria special fs-3 text-decoration-none"
                  target="_blank"
                >
                  Agenda tu asesoría
                </a>
              </div>
            </Container>
            <Container>
              <p className="fs-4 fw-bold mt-5 special-text">
                Déjanos tus datos para brindarte múltiples beneficios
              </p>
            </Container>
          </>
        )}
      </div>
    </div>
  );
};

export default SimpleBanner;
