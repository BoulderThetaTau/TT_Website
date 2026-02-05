import React from 'react';

/**
 * Contact Gallery Component
 *
 * Responsive image grid for the contact page.
 * Displays chapter photos in a clean, modern layout.
 */

interface GalleryImage {
  src: string;
  alt: string;
}

export const ContactGallery: React.FC = () => {
  const images: GalleryImage[] = [
    { src: '/images/EtaGamma_Contact.png', alt: 'Eta Gamma Chapter' },
    { src: '/images/CU_Campus.jpg', alt: 'CU Boulder Campus' },
    { src: '/images/RushSpr2025.png', alt: 'Rush Spring 2025' },
    { src: '/images/Retreat_2025_1.JPG', alt: 'Retreat 2025' },
    { src: '/images/Regionals_Spr_2023.png', alt: 'Regionals Spring 2023' },
  ];

  return (
    <div className="w-full my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
