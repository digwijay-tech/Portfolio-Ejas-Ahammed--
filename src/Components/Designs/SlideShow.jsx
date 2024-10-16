import gPic1 from '../../assets/img/Logos/logo-1.jpg'
import gPic2 from '../../assets/img/Logos/logo-2.jpg'
import gPic3 from '../../assets/img/Logos/logo-3.jpg'
import gPic4 from '../../assets/img/Logos/logo-4.jpg'
import gPic5 from '../../assets/img/Logos/logo-5.jpg'
import  { useState } from 'react';

const images = [
 
  {
    src: gPic2,
    link: 'https://example.com/1',
  },
  {
    src: gPic3,
    link: 'https://example.com/1',
  },
  {
    src: gPic4,
    link: 'https://example.com/1',
  },

  {
    src: gPic1,
    link: 'https://example.com/1',
  },

  {
    src: gPic5,
    link: 'https://example.com/1',
  },

  {
    src: gPic5,
    link: 'https://example.com/1',
  },
  {
    src: gPic5,
    link: 'https://example.com/1',
  },


];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerView = window.innerWidth >= 1024 ? 3 : 1; // Adjust this based on your breakpoint
    const totalSlides = Math.ceil(images.length / imagesPerView);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };
  
    return (
      <div className="relative w-full  mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 lg:gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)` }}
          >
            {images.map((image, index) => (
              <a
                href={image.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-shrink-0 w-full ${imagesPerView === 3 ? 'md:w-1/3' : 'md:w-full'}`}
              >
                <img src={image.src} alt={`Slide ${index}`} className="w-full h-auto" />
              </a>
            ))}
          </div>
        </div>
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2  text-gray-800  text-2xl p-2 rounded-full">
          &lt;
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2  text-gray-800  text-2xl p-2 rounded-full">
          &gt;
        </button>
      </div>
    );
};

export default ImageCarousel;
