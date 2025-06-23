// components/ClickableImage.tsx
"use client";
import React from "react";
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

interface ClickableImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  borderRadius?: string;
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
  cursor?: string;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
  caption,
  className = "",
  borderRadius = "md",
  objectFit = "contain",
  cursor = "pointer",
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Thumbnail Image */}
      <Box className={className} position="relative">
        <Image
          src={src}
          alt={alt}
          borderRadius={borderRadius}
          objectFit={objectFit}
          cursor={cursor}
          onClick={onOpen}
          transition="transform 0.2s ease-in-out"
          _hover={{
            transform: "scale(1.02)",
            shadow: "lg",
          }}
          w="100%"
          h="auto"
        />

        {/* Optional click hint overlay */}
        <Box
          position="absolute"
          top="4"
          right="4"
          bg="blackAlpha.600"
          color="white"
          px="2"
          py="1"
          borderRadius="md"
          fontSize="xs"
          opacity="0"
          transition="opacity 0.2s"
          _groupHover={{ opacity: 1 }}
        >
          Click to expand
        </Box>

        {caption && (
          <Text
            fontSize="sm"
            color="gray.600"
            mt="2"
            textAlign="center"
            fontStyle="italic"
          >
            {caption}
          </Text>
        )}
      </Box>

      {/* Fullscreen Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.800" />

        <ModalCloseButton
          position="fixed"
          color="white"
          size="lg"
          right="10"
          zIndex="modal"
        />

        <ModalContent
          bg="transparent"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          p="4"
        >
          <Image
            src={src}
            alt={alt}
            maxH="90vh"
            maxW="90vw"
            objectFit="contain"
            p="2"
          />

          {caption && (
            <Text
              color="white"
              mt="4"
              textAlign="center"
              borderColor="red"
              fontSize="lg"
              bg="blackAlpha.600"
              px="4"
              py="2"
              borderRadius="md"
            >
              {caption}
            </Text>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClickableImage;
