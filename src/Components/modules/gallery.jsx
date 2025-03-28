import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./modules_css/Gallery.css";

const Gallery = () => {
  const images = [
    { src: "images/EtaGamma_Contact.png", alt: "Image 1" },
    { src: "images/CU_Campus.jpg", alt: "Image 2" },
    { src: "images/Nationals_Contact_Img.png", alt: "Image 3" },
    { src: "images/Retreat_2025_1.JPG", alt: "Image 4" },
    { src: "images/Regionals_Spr_2023.png", alt: "Image 5" },
  ];

  const sliderRef = useRef(null); // Reference to the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, // Smooth continuous scrolling
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous autoplay
    cssEase: "linear", // Smooth scrolling
  };

  return (
    <div
      className="Gallery"
      onMouseEnter={() => sliderRef.current.slickPause()} // Pause autoplay on hover
      onMouseLeave={() => sliderRef.current.slickPlay()} // Resume autoplay on leave
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="GallerySlide">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;