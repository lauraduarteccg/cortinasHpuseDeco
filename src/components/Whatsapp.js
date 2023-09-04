import React from 'react'
import "./styles/Whatsapp.css"
import whastapp from "../asetss/Iconos/whatsapp.png"
const Whatsapp = () => {
  return (
  
    <a href="https://api.whatsapp.com/send?phone=573103907980&text=¡Hola!%20estoy%20interesado%20en%20los%20productos%20de%20House%20Deco.%20Me%20puedes%20brindar%20mayor%20información🏠"
        class="whatsapp-button" target="_blank" rel="noreferrer">
        <img src={whastapp} alt="whatsapp" class="whatsapp-button  img-fluid" />
    </a>
  
  )
}

export default Whatsapp
