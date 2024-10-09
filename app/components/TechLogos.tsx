"use client";
import { Image, Flex, Tooltip } from "@chakra-ui/react";

interface SVGLogo {
  label: string;
  file: string;
}
export const techIconMap: Record<string, string> = {
  HTML: "/html.svg",
  CSS: "/typescript.svg",
  nodejs: "/nodejs.svg",
  python: "/icons/python.svg",
  // Add more mappings as needed
};

export const logos: SVGLogo[] = [
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
    label: "React Hook Form",
    file: "react-form.svg",
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
    label: "Prisma ORM",
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
  {
    label: "Chakra UI",
    file: "chakra.svg",
  },
  {
    label: "Radix UI",
    file: "radix.svg",
  },
  {
    label: "D3",
    file: "d3.svg",
  },
];

const TechLogos = () => {
  return (
    <Flex wrap="wrap" gap="3" justifyContent="center">
      {logos.map((item, index) => (
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

export default TechLogos;
