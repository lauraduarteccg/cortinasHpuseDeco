import React from "react";
import { Carousel } from "react-bootstrap";
import Asesoria from "../Asesoria";
import "../styles/Carousel.css"
const Carousels = ({ images }) => {
  return (
    <Carousel style={{ height: "100%" }}>

      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} alt={"Mecanismo " + index} className="img-fluid" />
          <Carousel.Caption className="caption-banner">
            <h3 className="display-3 my-5">{image.caption}</h3>
            <Asesoria />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousels;
