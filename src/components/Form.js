import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Swal from "sweetalert2";
const Form = () => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Telefono: "",
    email: "",
    Mensaje: "",
  });

  const [formErrors, setFormErrors] = useState({
    Nombre: false,
    Apellido: false,
    Telefono: false,
    email: false,
    Mensaje: false,
  });
  const submitForm = async (event) => {
    event.preventDefault()
    const form = event.target; // Obtiene el formulario
    const formData = new FormData(form); // Obtiene los datos del formulario
    var submitButton = document.getElementById("submit-button");
    submitButton.disabled = true;

    fetch(form.action, { method: "POST", body: formData }) // Envía los datos del formulario mediante una petición POST
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Hemos recibido tus datos con éxito",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "my-swal-popup",
            },
          }); // Muestra una alerta en caso de éxito
          form.reset();
          submitButton.disabled = false;
        } else {
          Swal.fire({
            icon: "error",
            title: "Lo sentimos,hemos presentado un error",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "my-swal-popup",
            },
          });
          submitButton.disabled = false;
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Lo sentimos,hemos presentado un error",
          showConfirmButton: false,
          timer: 1500,
        });
        submitButton.disabled = false;
      });
  };

  const validateForm = () => {
    // Realiza la validación de los campos aquí
    const errors = {
      Nombre: false,
      Apellido: false,
      Telefono: false,
      email: false,
      Mensaje: false,
    };

    if (formData.Nombre.trim() === "") {
      errors.Nombre = true;
    }

    if (formData.Apellido.trim() === "") {
      errors.Apellido = true;
    }

    if (!/^[1-9][0-9]{9}$/.test(formData.Telefono)) {
      errors.Telefono = true;
    }

    if (
      formData.email.trim() === "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errors.email = true;
    }

    if (formData.Mensaje.trim() === "") {
      errors.Mensaje = true;
    }

    setFormErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <form
        action="https://script.google.com/macros/s/AKfycbxtlDXsgY-OFtGVhFD2rWih6YVtU-ODWWxWD19rPplK0CISYYDwkBO2G22OO2MZFheL/exec"
        className="form"
        method="POST"
        onSubmit={submitForm}
      >
        <div class="form-group">
          <input
            className={`form-control ${formErrors.Nombre ? "is-invalid" : ""}`}
            type="text"
            name="Nombre"
            placeholder="Nombre"
            required
            onBlur={validateForm}
            onChange={(e) =>
              setFormData({ ...formData, Nombre: e.target.value })
            }
          />
        </div>
        <div class="form-group">
          <input
            className={`form-control ${formErrors.Nombre ? "is-invalid" : ""}`}
            type="text"
            name="Apellido"
            id="Apellido"
            placeholder="Apellido"
            required
            onBlur={validateForm}
            onChange={(e) =>
              setFormData({ ...formData, Nombre: e.target.value })
            }
          />
        </div>
        <div class="form-group">
          <input
            className={`form-control ${formErrors.Nombre ? "is-invalid" : ""}`}
            type="tel"
            name="Telefono"
            id="Telefono"
            placeholder="Número de teléfono"
            required
            pattern="[1-9]{1}[0-9]{9}"
            onBlur={validateForm}
            onChange={(e) =>
              setFormData({ ...formData, Nombre: e.target.value })
            }
          />
        </div>
        <div class="form-group">
          <input
            className={`form-control ${formErrors.Nombre ? "is-invalid" : ""}`}
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            required
            onBlur={validateForm}
            onChange={(e) =>
              setFormData({ ...formData, Nombre: e.target.value })
            }
          />
        </div>
        <div class="form-group">
          <textarea
            className={`form-control ${formErrors.Nombre ? "is-invalid" : ""}`}
            name="Mensaje"
            id="Mensaje"
            cols="30"
            rows="10"
            placeholder="Escríbenos tu mensaje..."
            required
            onBlur={validateForm}
            onChange={(e) =>
              setFormData({ ...formData, Nombre: e.target.value })
            }
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit" id="submit-button" class="btn btn-primary ml-5">
            Enviar mensaje
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Form;
