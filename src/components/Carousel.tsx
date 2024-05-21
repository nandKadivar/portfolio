import { useEffect, useState } from "react";

const Carousel = ({images}: {images: string[]}) => {
    const [image, setImage] = useState(images[1]);

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            setImage(images[count % images.length]);
            count++;
        }, 2000);

        return () => clearInterval(interval);
    }, [image]);

    return (
      <div className="carousel-container">
        <div className="carousel flex flex-row items-center">
            <img src={image} alt={`Image`} />
        </div>
      </div>
    );
  };

export default Carousel;