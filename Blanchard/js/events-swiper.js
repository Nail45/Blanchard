document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".events__swiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".events-button-next",
      prevEl: ".events-button-prev",
    },

    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 35,
        slidesPerGroup: 2,
      },

      660: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerGroup: 2,
      },

      950: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 2,
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 1,
      }
    },

    a11y: {
      prevSlideMessage: 'к предыдущему слайду',
      nextSlideMessage: 'к следующему слайду',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "-1";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "-1";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});
