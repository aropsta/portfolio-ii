"use client";
import { Image, Flex, Tooltip } from "@chakra-ui/react";

interface SVGLogo {
  label: string;
  file: string;
}
const items: SVGLogo[] = [
  {
    label: "HTML",
    file: "html.svg",
  },
  {
    label: "CSS",
    file: "css.svg",
  },
  {
    label: "Next.js",
    file: "nextjs.svg",
  },
  {
    label: "JavaScript",
    file: "javascript.svg",
  },
  {
    label: "TypeScript",
    file: "typescript.svg",
  },
  {
    label: "Tailwind CSS",
    file: "tailwind.svg",
  },
  {
    label: "React.js",
    file: "react.svg",
  },
  {
    label: "C++",
    file: "cplus.svg",
  },
  {
    label: "Figma",
    file: "figma.svg",
  },
  {
    label: "Git",
    file: "git.svg",
  },
  {
    label: "Java",
    file: "java.svg",
  },
  {
    label: "Bash",
    file: "bash.svg",
  },
  {
    label: "Prisma",
    file: "prisma.svg",
  },
  {
    label: "React Query",
    file: "react-query.svg",
  },
  {
    label: "MySQL",
    file: "mysql.svg",
  },
  {
    label: "Axios",
    file: "axios.svg",
  },
];

const Tech = () => {
  return (
    <Flex wrap="wrap" gap="2" justifyContent="center">
      {items.map((item, index) => (
        <Tooltip label={item.label} hasArrow key={index}>
          <Image
            height="3rem"
            style={{ pointerEvents: "auto" }}
            src={item.file}
            alt={item.label}
            maxWidth="10rem"
          />
        </Tooltip>
      ))}
    </Flex>
  );
};

export default Tech;
