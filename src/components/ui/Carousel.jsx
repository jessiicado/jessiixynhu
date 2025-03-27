import React from "react";
import Slider from "react-slick";

// const slides = [
//   {
//     id: 1,
//     title: "Portfolio Project",
//     description: "A showcase of my work.",
//     link: "https://jessiicado.github.io",
//   },
//   {
//     id: 2,
//     title: "Valentine's Day Web App",
//     description: "A fun, interactive Valentine's app.",
//     link: "https://jessiicado.github.io/valentine/",
//   },
//   {
//     id: 3,
//     title: "Toggle Mode Calculator",
//     description: "A calculator with dark/light mode support.",
//     link: "https://github.com/jessiicado/calculator",
//   },
// ];

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
