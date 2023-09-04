import React, { useEffect } from "react";


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

const Slider = ({ images }) => {
  
  useEffect(() => {
    // Inicializar el Carousel después de que el componente se haya montado
    const owlCarousel = window.jQuery(".owl-carousel");
    owlCarousel.owlCarousel({
      loop: true,
      center: true,
      stagePadding: 50,
      dots: false,
      autoplayTimeout: 2000, 
      fluidSpeed: 10000,
      autoplay: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }, []);

  return (
    <div className="owl-carousel owl-theme my-4">
      {images.map((image, index) => (
        <div className="item" key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="img-fluid"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
