import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./modules_css/Gallery.css";

const Gallery = () => {
  const images = [
    { src: "images/EtaGamma_Contact.png", alt: "Image 1" },
    { src: "images/CU_Campus.jpg", alt: "Image 2" },
    { src: "images/RushSpr2025.png", alt: "Image 3" },
    { src: "images/Retreat_2025_1.JPG", alt: "Image 4" },
    { src: "images/Regionals_Spr_2023.png", alt: "Image 5" },
  ];

  const [slidesToShow, setSlidesToShow] = useState(2); // Default slides to show
  const sliderRef = useRef(null); // Reference to the slider

  useEffect(() => {
    // Match the Tailwind 'slim' breakpoint (450px)
    const mediaQueryMedium = window.matchMedia("(max-width: 875px)");
    const mediaQuerySmall = window.matchMedia("(max-width: 450px)");

    // Function to update slidesToShow based on screen size
    const handleResize = () => {
      if (mediaQueryMedium.matches) {
        setSlidesToShow(2); // Show 1 slide on small screens
      } else if (mediaQuerySmall.matches) {
        setSlidesToShow(1); // Show 1 slide on small screens
      } else {
        setSlidesToShow(3); // Default to 3 slides on larger screens
      }
    };

    // Add event listener for screen size changes
    mediaQuerySmall.addEventListener("change", handleResize);
    mediaQueryMedium.addEventListener("change", handleResize);

    // Call the function initially to set the correct slidesToShow
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
        mediaQueryMedium.removeEventListener("change", handleResize);
        mediaQuerySmall.removeEventListener("change", handleResize);
      };
    }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, // Smooth continuous scrolling
    slidesToShow: slidesToShow, // Dynamically set slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous autoplay
    cssEase: "linear", // Smooth scrolling
  };

  return (
    <div className="Gallery">
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