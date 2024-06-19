import { useEffect, useState } from "react";

const Carousel = ({images}: {images: string[]}) => {
    const [image, setImage] = useState(images[0]);
    const PORTFOLIO_GOOGLE_IMG_URL = process.env.REACT_APP_PORTFOLIO_GOOGLE_IMG_URL || '';
    
    useEffect(() => {
      let count = 0;
      const interval = setInterval(() => {
        setImage(images[count % images.length]);
        count++;
      }, 2000);

      return () => clearInterval(interval);
    }, [images]);
    
    return (
      <div className="carousel-container">
        <div className="carousel flex flex-row items-center">
            <img src={PORTFOLIO_GOOGLE_IMG_URL+image} alt={`Image`} />
        </div>
      </div>
    );
  };

export default Carousel;