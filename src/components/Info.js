import React from 'react'
import whastapp from "../asetss/Iconos/whatsapp.png"
import { Container } from "react-bootstrap";
import "./styles/Info.css";
const Info = () => {
  return (
    <Container >
    <h3 className="display-6 font-pink text-center mt-5">¡Llámanos o Escríbenos!</h3>
    <h4 className="fw-bold text-center mt-4">(+57) 317 383 5387</h4>
    <div
        className="d-flex align-items-center justify-content-center text-center m-4 px-4 bg-gris-medio container-second mx-auto product ">
        <a href="https://api.whatsapp.com/send?phone=573103907980&text=¡Hola!%20estoy%20interesado%20en%20los%20productos%20de%20House%20Deco.%20Me%20puedes%20brindar%20mayor%20información🏠"
            className="text-decoration-none">
            <div className="d-flex align-items-center">
                <img src={whastapp} alt="whatsapp" className="img-fluid me-2" />
                <p className="lead fw-bold text-white mt-4">Whatsapp Aquí</p>
            </div>
        </a>
    </div>
</Container>
  )
}

export default Info
