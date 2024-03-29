$(document).ready(function () {
  simpleCarousel($(".simple-carousel"), 5000);
});

function simpleCarousel(carousel, intervalTime = 5000) {
  var slideCount = $(carousel).find("ul li.slide").length;
  var activeSlide = 0;

  function showSlide() {
    $(carousel)
      .find("ul li.slide")
      .each(function (index) {
        if (index == activeSlide) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
  }

  setInterval(function () {
    moveRight();
  }, intervalTime);

  function moveLeft() {
    activeSlide -= 1;
    if (activeSlide < 0) {
      activeSlide = slideCount - 1;
    }
    showSlide();
  }

  function moveRight() {
    activeSlide += 1;
    if (activeSlide >= slideCount) {
      activeSlide = 0;
    }
    showSlide();
  }

  $(carousel)
    .find("a.control_prev")
    .click(function () {
      moveLeft();
    });

  $(carousel)
    .find("a.control_next")
    .click(function () {
      moveRight();
    });
}

var selector = ".navbar-nav li a";

$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function ($) {
  "use strict";
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 30,
    autoplay: false,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 3,
      },
    },
  });
});
