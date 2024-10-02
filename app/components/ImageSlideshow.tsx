// components/ImageCarousel.tsx
import { Box, Image, useInterval } from "@chakra-ui/react";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, interval);

  return (
    <Box position="relative" width="full" height="400px" overflow="hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`carousel-image-${index}`}
          position="absolute"
          top="0"
          left="0"
          width="full"
          height="full"
          objectFit="cover"
          opacity={index === currentIndex ? 1 : 0}
          transition="opacity 1s ease-in-out"
        />
      ))}
    </Box>
  );
};

export default ImageCarousel;
