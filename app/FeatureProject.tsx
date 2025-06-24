"use client";
import React, { useState } from "react";
import {
  Text,
  Box,
  Heading,
  Badge,
  VStack,
  HStack,
  Button,
  Grid,
  Image,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import CustomContainer from "./components/CustomContainer";
import ClickableImage from "./components/ClickableImage";
import ArchitectureDiagram from "./components/ArchitectureDiagram";

const FeaturedProject = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techStack = {
    backend: [
      { name: "NestJS", src: "nest.svg" },
      { name: "PostgreSQL", src: "postgresql.svg" },
      { name: "Prisma", src: "prisma.svg" },
      { name: "Redis", src: "redis.svg" },
      { name: "BullMQ", src: null },
      { name: "Clerk Auth", src: null },
      { name: "Stripe", src: null },
    ],
    frontend: [
      { name: "Next.js", src: "nextjs.svg" },
      { name: "React", src: "react.svg" },
      { name: "TypeScript", src: "typescript.svg" },
      { name: "Tailwind", src: "tailwind.svg" },
      { name: "Chakra UI", src: null },
      { name: "Zustand", src: null },
    ],
    infrastructure: [
      { name: "Kubernetes", src: "k8s.svg" },
      { name: "Docker", src: "docker.svg" },
      { name: "GCP", src: "gcp.svg" },
      { name: "Cloudflare", src: null },
      { name: "Longhorn", src: null },
      { name: "CloudNativePG", src: null },
    ],
    operations: [
      { name: "Grafana", src: "grafana.svg" },
      { name: "NGINX", src: "nginx.svg" },
      { name: "Git", src: "git.svg" },
      { name: "Bash", src: "bash.svg" },
      { name: "Prometheus", src: null },
      { name: "Helm", src: null },
    ],
  };

  const challenges = [
    {
      icon: "🔄",
      title: "Product Normalization",
      description:
        "Matching 'Coca-Cola 2L' with 'Coke Soft Drink 2 Litre' across different retailer schemas",
    },
    {
      icon: "🎯",
      title: "Algorithmic Matching",
      description:
        "Multi-criteria scoring system with confidence thresholds for automated approval",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Processing thousands of products with efficient batch operations and memory management",
    },
    {
      icon: "🏗️",
      title: "Infrastructure Automation",
      description:
        "Self-managed Kubernetes with operators, monitoring, and disaster recovery procedures",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description:
        "Live price tracking and historical trend analysis for genuine savings identification",
    },
    {
      icon: "🔒",
      title: "Data Security",
      description:
        "Network policies, encrypted storage, and secure API authentication across all services",
    },
  ];

  return (
    <CustomContainer className="flex gap-8 flex-col" bgColor="gray.50">
      {/* Hero Section */}
      <VStack spacing={6} align="start" w="full">
        <HStack>
          <Heading as="h2" color="primary.400" id="featured-project">
            Featured Project
          </Heading>
          <Badge
            colorScheme="green"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="sm"
          >
            Live Production
          </Badge>
        </HStack>

        <Grid templateColumns={{ base: "1fr", lg: "1fr" }} gap={8} w="full">
          <VStack align="start" spacing={6}>
            <VStack align="start" spacing={3}>
              <Heading as="h3" color="gray.900">
                Shoplytic Grocery
              </Heading>
              <Text fontSize="xl" color="gray.600" fontWeight="500">
                Australian Grocery Shopping List & Analytics Platform
              </Text>
            </VStack>

            <Text color="gray.700" fontSize="lg" lineHeight="tall">
              Shoplytic transforms grocery shopping by automatically finding the
              best prices across Australia&apos;s major retailers. Users simply
              build their shopping lists, and our intelligent matching system
              identifies identical products across Coles, Woolworths, ALDI, and
              IGA—regardless of how each store names or describes them. The
              platform instantly shows users where to get the best deal for each
              item, eliminating manual price checking and ensuring they never
              overpay for groceries again.
            </Text>

            <HStack spacing={4}>
              <Button
                colorScheme="primary"
                size="md"
                rightIcon={<ExternalLinkIcon />}
                onClick={() =>
                  window.open("https://beta.shoplytic.com.au", "_blank")
                }
              >
                View Live Platform
              </Button>
              <Button
                variant="outline"
                colorScheme="primary"
                size="md"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Technical Discussion
              </Button>
            </HStack>
          </VStack>
        </Grid>
      </VStack>

      {/* Dynamic Content Tabs */}
      <Box
        bg="white"
        borderRadius="2xl"
        p={8}
        shadow="xl"
        border="1px solid"
        borderColor="gray.200"
      >
        <Tabs
          index={activeTab}
          onChange={setActiveTab}
          colorScheme="purple"
          size="sm"
          variant="solid-rounded"
          shadow="none"
          borderRadius="md"
        >
          <TabList mb={8} p={2} borderRadius="md" gap={2}>
            <Tab
              _selected={{ bg: "primary.500", color: "white" }}
              _hover={{ bg: "primary.600", color: "white" }}
            >
              Architecture
            </Tab>
            <Tab
              _selected={{ bg: "primary.500", color: "white" }}
              _hover={{ bg: "primary.100", color: "white" }}
            >
              Challenges
            </Tab>
            <Tab
              _selected={{ bg: "primary.500", color: "white" }}
              _hover={{ bg: "primary.100", color: "white" }}
            >
              Technology
            </Tab>
            <Tab
              _selected={{ bg: "primary.500", color: "white" }}
              _hover={{ bg: "primary.100", color: "white" }}
            >
              Screenshots
            </Tab>
          </TabList>

          <TabPanels>
            {/* Architecture Tab */}
            <TabPanel px={0}>
              <VStack spacing={6}>
                <Text
                  fontSize="lg"
                  color="gray.600"
                  textAlign="center"
                  maxW="2xl"
                >
                  Three-layer architecture showing application flow, data
                  processing, and infrastructure management
                </Text>
                <ArchitectureDiagram />
              </VStack>
            </TabPanel>

            {/* Challenges Tab */}
            <TabPanel px={0}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {challenges.map((challenge) => (
                  <Box
                    key={challenge.title}
                    p={6}
                    bg="gray.50"
                    borderRadius="xl"
                    _hover={{ shadow: "md", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                  >
                    <HStack align="start" spacing={4}>
                      <Text fontSize="3xl">{challenge.icon}</Text>
                      <VStack align="start" spacing={2}>
                        <Heading size="md" color="gray.800">
                          {challenge.title}
                        </Heading>
                        <Text color="gray.600" fontSize="sm" lineHeight="tall">
                          {challenge.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Technology Tab */}
            <TabPanel px={0}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {Object.entries(techStack).map(([category, technologies]) => (
                  <VStack key={category} align="start" spacing={4}>
                    <Heading
                      size="md"
                      color="gray.800"
                      textTransform="capitalize"
                    >
                      {category}
                    </Heading>
                    <Grid
                      templateColumns="repeat(auto-fit, minmax(120px, 1fr))"
                      gap={4}
                      w="full"
                    >
                      {technologies.map((tech) => (
                        <VStack
                          key={tech.name}
                          spacing={2}
                          p={4}
                          bg="gray.50"
                          borderRadius="lg"
                          _hover={{ bg: "gray.100" }}
                          transition="background 0.2s"
                          align="center"
                          justify="center"
                        >
                          {tech.src && (
                            <Image
                              w="32px"
                              h="32px"
                              src={tech.src}
                              alt={tech.name}
                            />
                          )}
                          <Text
                            fontSize="sm"
                            fontWeight="500"
                            textAlign="center"
                          >
                            {tech.name}
                          </Text>
                        </VStack>
                      ))}
                    </Grid>
                  </VStack>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Screenshots Tab */}
            <TabPanel px={0}>
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
                <VStack spacing={4}>
                  <ClickableImage
                    src="/application-dashboard.png"
                    alt="Live application interface showing price comparisons"
                    caption="Live Application Interface"
                  />
                  <ClickableImage
                    src="/admin-dashboard.png"
                    alt="Admin dashboard for managing product matches"
                    caption="Admin Dashboard & Management"
                  />
                </VStack>
                <VStack spacing={4}>
                  <ClickableImage
                    src="/grafana-dashboard2.png"
                    alt="Comprehensive monitoring dashboard"
                    caption="Production Monitoring"
                  />
                  <ClickableImage
                    src="/grafana-dashboard3.png"
                    alt="Database performance and health metrics"
                    caption="Database & Performance Metrics"
                  />
                </VStack>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Call to Action */}
      <Box
        textAlign="center"
        py={8}
        bg="white"
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.200"
      >
        <VStack spacing={4}>
          <Heading size="lg" color="gray.800">
            Ready to Discuss the Technical Implementation?
          </Heading>
          <Text color="gray.600" maxW="xl" mx="auto">
            I&apos;d be excited to walk through the system architecture, discuss
            algorithmic approaches, or dive into the infrastructure and
            deployment strategies.
          </Text>
          <Button
            colorScheme="primary"
            size="lg"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a Technical Discussion
          </Button>
        </VStack>
      </Box>
    </CustomContainer>
  );
};

export default FeaturedProject;
