import React from "react";
import { Row, Col } from "react-bootstrap";

const Caracteristicas = ({ imageSrc, title, description }) => {
  return (
    <Row className="mx-auto d-flex align-items-center justify-content-center mt-3 text-center">
      <Col md={6} sm={6} className="d-flex flex-column align-items-center">
        <img src={imageSrc} alt={title} width="70" className="img-fluid" />
        {title && <h3 className="font-pink mt-3">{title}</h3>}
        {description && <p>{description}</p>}
      </Col>
    </Row>
  );
};

export default Caracteristicas;
