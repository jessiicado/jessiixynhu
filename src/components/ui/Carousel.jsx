import { link } from "motion/react-client";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Portfolio Project",
      description: "Description of Project 1",
      link: "https://jessiicado.github.io",
    },
    {
      id: 2,
      title: "Valentine's Day Web App",
      description: "Description of Project 2",
      link: "https://jessiicado.github.io/valentine/",
    },
    {
      id: 3,
      title: "Toggle Mode Calculator",
      description: "Description of Project 3",
      link: "https://github.com/jessiicado/calculator",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isHovered, slides.length]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return <div className="card w-60 h-40"></div>;
};

export default Carousel;
