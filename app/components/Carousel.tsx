"use client";
// components/Carousel.tsx
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  items: { src: string; alt: string }[];
}

const items = [
  { src: "/axios.svg", alt: "Image 1" },
  { src: "/bash.svg", alt: "Image 2" },
  { src: "/java.svg", alt: "Image 3" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <Box position="relative" width="full" overflow="hidden">
      {items.map((item, index) => (
        <Box
          key={index}
          display={index === currentIndex ? "block" : "none"}
          width="full"
          height="300px"
          backgroundImage={`url(${item.src})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Box
            position="absolute"
            top="50%"
            left="10px"
            transform="translateY(-50%)"
          >
            <IconButton
              aria-label="Previous Slide"
              icon={<FaArrowLeft />}
              onClick={prevSlide}
            />
          </Box>
          <Box
            position="absolute"
            top="50%"
            right="10px"
            transform="translateY(-50%)"
          >
            <IconButton
              aria-label="Next Slide"
              icon={<FaArrowRight />}
              onClick={nextSlide}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
