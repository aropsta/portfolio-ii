import {
  IconButton,
  Image,
  useInterval,
  Flex,
  Heading,
  Card,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { ProjectItem } from "../Projects";
import { Link } from "@chakra-ui/next-js";
interface ImageCarouselProps {
  items: ProjectItem[];
  interval?: number;
}

const Carousel = ({ items, interval = 2500 }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const filtererdItems = items.filter((item, i) => i > 2);

  useInterval(() => {
    if (!isPaused) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filtererdItems.length);
    }
  }, interval);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filtererdItems.length) % filtererdItems.length,
    );
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filtererdItems.length);
  };

  const getPrevIndex = () =>
    currentIndex === 0 ? filtererdItems.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === filtererdItems.length - 1 ? 0 : currentIndex + 1;

  return (
    <Card className="relative flex w-full overflow-hidden flex-col gap-5 p-8">
      <Heading
        as="h3"
        fontSize="2xl"
        color="primary.400"
        textAlign="center"
        textColor="primary.700"
        pb="4"
      >
        <Link target="_blank" href={filtererdItems[currentIndex].git}>
          {filtererdItems[currentIndex].title}
        </Link>
      </Heading>
      <Flex justify="center" align="center" gap="2">
        <Image
          src={filtererdItems[getPrevIndex()].img}
          alt={`Image ${getPrevIndex() + 1}`}
          width="25%"
          opacity={0.4}
          flexShrink={0}
        />
        <Link
          href={filtererdItems[currentIndex].site}
          target="_blank"
          _hover={{
            transform: "scale(1.01)",
          }}
          flexShrink={0}
          width="75%"
        >
          <Image
            src={filtererdItems[currentIndex].img}
            alt={`Image ${currentIndex + 1}`}
          />
        </Link>
        <Image
          src={filtererdItems[getNextIndex()].img}
          alt={`Image ${getNextIndex() + 1}`}
          width="25%"
          opacity={0.4}
          flexShrink={0}
        />
      </Flex>
      <IconButton
        aria-label="Next Image"
        icon={<ChevronRightIcon />}
        position="absolute"
        right="1%"
        top="50%"
        transform="translateY(-50%)"
        fontSize="3xl"
        colorScheme="primary"
        onClick={handleNext}
      />
      <IconButton
        aria-label="Previous Image"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left="1%"
        fontSize="3xl"
        colorScheme="primary"
        top="50%"
        transform="translateY(-50%)"
        onClick={handlePrev}
      />
    </Card>
  );
};

export default Carousel;
