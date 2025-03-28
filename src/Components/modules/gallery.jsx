import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./modules_css/Gallery.css";

const Gallery = () => {
  const images = [
    { src: "images/EtaGamma_Contact.png", alt: "Image 1" },
    { src: "images/EtaGamma_Contact.png", alt: "Image 2" },
    { src: "images/EtaGamma_Contact.png", alt: "Image 3" },
    { src: "images/EtaGamma_Contact.png", alt: "Image 4" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="Gallery">
      <Slider {...settings}>
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