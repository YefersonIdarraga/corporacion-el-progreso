import React, { useState, useEffect } from 'react'

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <>
        {isVisible && (
          <button className="scroll-top" title='Volver al principio' onClick={scrollToTop}>
            <i class="bi bi-caret-up-fill"></i>
          </button>
        )}
      </>
    );
}

export default ScrollTop