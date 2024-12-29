document.addEventListener("DOMContentLoaded", () => {
  // Select both carousels by their unique IDs
  const carousels = document.querySelectorAll(".carousel");

  const applySeeMoreToActiveItem = (carousel) => {
    const activeItem = carousel.querySelector(".carousel-item.active");
    const descriptions = activeItem.querySelectorAll(".card-text");

    descriptions.forEach((description) => {
      const fullText = description.textContent.trim();
      if (description.scrollHeight > description.offsetHeight) {
        const showMore = document.createElement("span");
        showMore.classList.add("show-more");
        showMore.textContent = " See more";
        description.textContent = fullText.slice(0, 50).trim() + "...";
        description.appendChild(showMore);

        showMore.addEventListener("click", () => {
          if (description.classList.contains("expanded")) {
            description.classList.remove("expanded");
            description.textContent = fullText.slice(0, 50).trim() + "...";
            description.appendChild(showMore);
            showMore.textContent = " See more";
          } else {
            description.classList.add("expanded");
            description.textContent = fullText;
            description.appendChild(showMore);
            showMore.textContent = " See less";
          }
        });
      }
    });
  };

  // Apply the see more functionality to each carousel
  carousels.forEach((carousel) => {
    applySeeMoreToActiveItem(carousel);

    // Reapply when the carousel slides
    carousel.addEventListener('slid.bs.carousel', () => {
      applySeeMoreToActiveItem(carousel);
    });
  });
});

function aosInit() {
  AOS.init({
      duration: 300,
      easing: 'ease-in-out',
      once: true,
      mirror: false
  });
}

window.addEventListener('load', aosInit);

const glightbox = GLightbox({
  selector: '.glightbox'
});

function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
      } else {
          new Swiper(swiperElement, config);
      }
  });
}

window.addEventListener("load", initSwiper);

document.addEventListener("DOMContentLoaded", function () {
  new Swiper('.init-swiper', {
      loop: true,
      speed: 600,
      autoplay: {
          delay: 5000
      },
      slidesPerView: 'auto',
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
      },
      breakpoints: {
          320: {
              slidesPerView: 2,
              spaceBetween: 40
          },
          480: {
              slidesPerView: 3,
              spaceBetween: 60
          },
          640: {
              slidesPerView: 4,
              spaceBetween: 80
          },
          992: {
              slidesPerView: 5,
              spaceBetween: 120
          },
          1200: {
              slidesPerView: 6,
              spaceBetween: 120
          }
      }
  });
});

var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }


 
