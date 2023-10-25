import React, { useState, useEffect } from 'react';
import "../styles/slider.css"

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider">
      <button onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className='slider-prev' onClick={prevSlide}><i class={`bi bi-caret-left${hover ? '-fill' : ''}`}></i></button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slider-img ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button onMouseOver={() => setHover2(true)} onMouseOut={() => setHover2(false)} className='slider-next' onClick={nextSlide}><i class={`bi bi-caret-right${hover2 ? '-fill' : ''}`}></i></button>
    </div>
  );
};

export default Slider;
