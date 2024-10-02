import {
  IconButton,
  Text,
  Box,
  Image,
  useInterval,
  Flex,
  Heading,
  Card,
  useTheme,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { ProjectItem } from "../Projects";
import { Link } from "@chakra-ui/next-js";
interface ImageCarouselProps {
  items: ProjectItem[];
  interval?: number;
}

const Carousel = ({ items, interval = 3000 }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const filtererdItems = items.filter((item, i) => i > 1);

  // useInterval(() => {
  //   if (!isPaused) {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % filtererdItems.length);
  //   }
  // }, interval);

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
    <Card className="relative flex w-full overflow-hidden flex-col gap-5 p-16">
      <Heading as="h3" fontSize="2xl" color="primary.400">
        <Link target="_blank" href={filtererdItems[currentIndex].git}>
          {filtererdItems[currentIndex].title}
        </Link>
      </Heading>
      <Flex justify="center" align="center" gap="2">
        <Image
          src={filtererdItems[getPrevIndex()].img}
          alt={`Image ${getPrevIndex() + 1}`}
          width="90%"
          opacity={0.4}
        />
        <Link
          href={filtererdItems[currentIndex].site}
          target="_blank"
          _hover={{ outline: `2px solid ${useTheme().colors.primary[400]}` }}
        >
          <Image
            src={filtererdItems[currentIndex].img}
            alt={`Image ${currentIndex + 1}`}
          />
        </Link>
        <Image
          src={filtererdItems[getNextIndex()].img}
          alt={`Image ${getNextIndex() + 1}`}
          width="90%"
          opacity={0.4}
        />
      </Flex>
      <IconButton
        aria-label="Next Image"
        icon={<ChevronRightIcon />}
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(-50%)"
        onClick={handleNext}
      />
      <IconButton
        aria-label="Previous Image"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        onClick={handlePrev}
      />
    </Card>
  );
};

export default Carousel;
