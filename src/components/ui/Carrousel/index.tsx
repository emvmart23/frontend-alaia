import { useEffect, useState } from "react";
import styles from "./Carrousel.module.css";

interface Props {
  id: number;
  url: string;
}

interface CarrouselProps {
  images: Props[];
  children?: React.ReactNode;
}

export default function Carrousel({ images, children }: CarrouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section className={styles.imageContainer}>
      {children && <div className={styles.container}>{children}</div>}
      <div
        className={styles.sliders}
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.url}
            className={styles.image}
          />
        ))}
      </div>
    </section>
  );
}
