"use strict";

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", function() {

  // ===== Header scroll transparente/sólido =====
  const header = document.querySelector("header");
  const headerText = document.querySelector(".header-text");

  if (header && headerText) {
    // Inicializamos con header sólido
    header.classList.add("solid-header");

    window.addEventListener("scroll", function() {
      const scroll = window.scrollY;

      if (scroll > 0) {
        // Cuando hay scroll → transparente
        header.classList.add("transparent-header");
        header.classList.remove("solid-header");
      } else {
        // Cuando estamos arriba → sólido
        header.classList.add("solid-header");
        header.classList.remove("transparent-header");
      }
    });
  }

  // ===== Preloader (opcional) =====
  // const preloader = document.getElementById("preloader");
  // if (preloader) {
  //   preloader.style.opacity = 0;
  //   setTimeout(() => {
  //     preloader.style.visibility = "hidden";
  //   }, 900);
  // }

  // ===== Owl Carousels =====
  // Nota: Owl Carousel sigue necesitando jQuery
  if (window.jQuery) {
    const $ = window.jQuery;

    if ($('.owl-clients').length) {
      $('.owl-clients').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
          0: { items: 1, margin: 0 },
          460: { items: 1, margin: 0 },
          576: { items: 3, margin: 20 },
          992: { items: 5, margin: 30 }
        }
      });
    }

    if ($('.owl-banner').length) {
      $('.owl-banner').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 3,
        margin: 10,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
          0: { items: 1, margin: 0 },
          460: { items: 1, margin: 0 },
          576: { items: 1, margin: 10 },
          992: { items: 3, margin: 10 }
        }
      });
    }
  }

});
