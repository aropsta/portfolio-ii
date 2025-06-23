import {
  Text,
  Box,
  Heading,
  VStack,
  Grid,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

export default function ArchitectureDiagram() {
  return (
    <VStack spacing={8}>
      {/* Application Architecture */}
      <Box
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        p={6}
        borderRadius="xl"
        w="full"
      >
        <VStack spacing={6}>
          <Heading size="md" color="white" textAlign="center">
            Application Architecture
          </Heading>

          <Grid
            templateColumns="1fr 2fr 1fr"
            gap={6}
            w="full"
            alignItems="center"
          >
            {/* User Interfaces */}
            <VStack spacing={4}>
              <Text fontSize="sm" fontWeight="600" color="white" mb={2}>
                User Interfaces
              </Text>
              <VStack spacing={3}>
                <Box
                  bg="rgba(255,255,255,0.15)"
                  backdropFilter="blur(10px)"
                  px={4}
                  py={3}
                  borderRadius="lg"
                  border="1px solid rgba(255,255,255,0.2)"
                  w="full"
                  textAlign="center"
                >
                  <Text color="white" fontWeight="600" fontSize="sm">
                    Next.js Web App
                  </Text>
                  <Text color="whiteAlpha.800" fontSize="xs">
                    Shopping Lists
                  </Text>
                </Box>
                <Box
                  bg="rgba(255,255,255,0.15)"
                  backdropFilter="blur(10px)"
                  px={4}
                  py={3}
                  borderRadius="lg"
                  border="1px solid rgba(255,255,255,0.2)"
                  w="full"
                  textAlign="center"
                >
                  <Text color="white" fontWeight="600" fontSize="sm">
                    Admin Dashboard
                  </Text>
                  <Text color="whiteAlpha.800" fontSize="xs">
                    Product Management
                  </Text>
                </Box>
              </VStack>
            </VStack>

            {/* Core API */}
            <VStack spacing={4}>
              <Text fontSize="sm" fontWeight="600" color="white" mb={2}>
                Core API Services
              </Text>
              <Box
                bg="rgba(255,255,255,0.2)"
                backdropFilter="blur(10px)"
                p={4}
                borderRadius="xl"
                border="1px solid rgba(255,255,255,0.3)"
                w="full"
              >
                <VStack spacing={3}>
                  <Box
                    bg="linear-gradient(135deg, #9f7aea 0%, #805ad5 100%)"
                    px={4}
                    py={3}
                    borderRadius="lg"
                    w="full"
                    textAlign="center"
                  >
                    <Text color="white" fontWeight="600" fontSize="sm">
                      NestJS API Server
                    </Text>
                  </Box>

                  <SimpleGrid columns={2} spacing={2} w="full">
                    <Box
                      bg="rgba(255,255,255,0.2)"
                      px={3}
                      py={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text color="white" fontSize="xs" fontWeight="500">
                        Product Matching
                      </Text>
                    </Box>
                    <Box
                      bg="rgba(255,255,255,0.2)"
                      px={3}
                      py={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text color="white" fontSize="xs" fontWeight="500">
                        Price Analytics
                      </Text>
                    </Box>
                    <Box
                      bg="rgba(255,255,255,0.2)"
                      px={3}
                      py={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text color="white" fontSize="xs" fontWeight="500">
                        Data Pipeline
                      </Text>
                    </Box>
                    <Box
                      bg="rgba(255,255,255,0.2)"
                      px={3}
                      py={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text color="white" fontSize="xs" fontWeight="500">
                        User Management
                      </Text>
                    </Box>
                  </SimpleGrid>
                </VStack>
              </Box>
            </VStack>

            {/* External Dependencies */}
            <VStack spacing={4}>
              <Text fontSize="sm" fontWeight="600" color="white" mb={2}>
                External Dependencies
              </Text>
              <VStack spacing={3}>
                <Box
                  bg="rgba(255,255,255,0.15)"
                  backdropFilter="blur(10px)"
                  px={4}
                  py={3}
                  borderRadius="lg"
                  border="1px solid rgba(255,255,255,0.2)"
                  w="full"
                  textAlign="center"
                >
                  <Text color="white" fontWeight="600" fontSize="sm">
                    Retailer APIs
                  </Text>
                  <Text color="whiteAlpha.800" fontSize="xs">
                    Product Data
                  </Text>
                </Box>
                <Box
                  bg="rgba(255,255,255,0.15)"
                  backdropFilter="blur(10px)"
                  px={4}
                  py={3}
                  borderRadius="lg"
                  border="1px solid rgba(255,255,255,0.2)"
                  w="full"
                  textAlign="center"
                >
                  <Text color="white" fontWeight="600" fontSize="sm">
                    Clerk Auth
                  </Text>
                  <Text color="whiteAlpha.800" fontSize="xs">
                    Authentication
                  </Text>
                </Box>
                <Box
                  bg="rgba(255,255,255,0.15)"
                  backdropFilter="blur(10px)"
                  px={4}
                  py={3}
                  borderRadius="lg"
                  border="1px solid rgba(255,255,255,0.2)"
                  w="full"
                  textAlign="center"
                >
                  <Text color="white" fontWeight="600" fontSize="sm">
                    Stripe
                  </Text>
                  <Text color="whiteAlpha.800" fontSize="xs">
                    Payments
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </Grid>

          {/* Data Flow Arrows */}
          <HStack spacing={4} w="full" justify="center">
            <Text color="white" fontSize="lg">
              🔄
            </Text>
            <Text color="whiteAlpha.800" fontSize="sm">
              Bidirectional API Communication
            </Text>
            <Text color="white" fontSize="lg">
              🔄
            </Text>
          </HStack>
        </VStack>
      </Box>

      {/* Data Storage Layer */}
      <Box
        bg="linear-gradient(135deg, #48bb78 0%, #38a169 100%)"
        p={6}
        borderRadius="xl"
        w="full"
      >
        <VStack spacing={4}>
          <Heading size="md" color="white" textAlign="center">
            Data Storage & Processing
          </Heading>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="full">
            <Box
              bg="rgba(255,255,255,0.2)"
              backdropFilter="blur(10px)"
              p={4}
              borderRadius="lg"
              border="1px solid rgba(255,255,255,0.3)"
              textAlign="center"
            >
              <Text color="white" fontWeight="600" fontSize="sm" mb={1}>
                PostgreSQL
              </Text>
              <Text color="whiteAlpha.800" fontSize="xs">
                Core Products & Users
              </Text>
            </Box>
            <Box
              bg="rgba(255,255,255,0.2)"
              backdropFilter="blur(10px)"
              p={4}
              borderRadius="lg"
              border="1px solid rgba(255,255,255,0.3)"
              textAlign="center"
            >
              <Text color="white" fontWeight="600" fontSize="sm" mb={1}>
                Redis
              </Text>
              <Text color="whiteAlpha.800" fontSize="xs">
                Sessions & Cache
              </Text>
            </Box>
            <Box
              bg="rgba(255,255,255,0.2)"
              backdropFilter="blur(10px)"
              p={4}
              borderRadius="lg"
              border="1px solid rgba(255,255,255,0.3)"
              textAlign="center"
            >
              <Text color="white" fontWeight="600" fontSize="sm" mb={1}>
                Matching Engine
              </Text>
              <Text color="whiteAlpha.800" fontSize="xs">
                Product Algorithm
              </Text>
            </Box>
            <Box
              bg="rgba(255,255,255,0.2)"
              backdropFilter="blur(10px)"
              p={4}
              borderRadius="lg"
              border="1px solid rgba(255,255,255,0.3)"
              textAlign="center"
            >
              <Text color="white" fontWeight="600" fontSize="sm" mb={1}>
                Job Queues
              </Text>
              <Text color="whiteAlpha.800" fontSize="xs">
                Background Tasks
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Infrastructure Layer */}
      <Box
        bg="linear-gradient(135deg, #4299e1 0%, #3182ce 100%)"
        p={6}
        borderRadius="xl"
        w="full"
      >
        <VStack spacing={4}>
          <Heading size="md" color="white" textAlign="center">
            Kubernetes Infrastructure
          </Heading>

          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 2fr 1fr" }}
            gap={6}
            w="full"
          >
            {/* External Access */}
            <VStack spacing={3}>
              <Text fontSize="sm" fontWeight="600" color="white">
                External Access
              </Text>
              <Box
                bg="rgba(255,255,255,0.2)"
                p={3}
                borderRadius="lg"
                textAlign="center"
                w="full"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  GCP Load Balancer
                </Text>
                <Text color="whiteAlpha.800" fontSize="xs">
                  SSL Termination
                </Text>
              </Box>
              <Box
                bg="rgba(255,255,255,0.2)"
                p={3}
                borderRadius="lg"
                textAlign="center"
                w="full"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  NGINX Ingress
                </Text>
                <Text color="whiteAlpha.800" fontSize="xs">
                  Traffic Routing
                </Text>
              </Box>
            </VStack>

            {/* Core Services */}
            <SimpleGrid columns={2} spacing={3}>
              <Box
                bg="rgba(255,255,255,0.15)"
                p={3}
                borderRadius="lg"
                textAlign="center"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  App Pods
                </Text>
                <Text color="whiteAlpha.800" fontSize="xs">
                  HA Deployment
                </Text>
              </Box>
              <Box
                bg="rgba(255,255,255,0.15)"
                p={3}
                borderRadius="lg"
                textAlign="center"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  Database Cluster
                </Text>
                <Text color="whiteAlpha.800" fontSize="xs">
                  Primary + Replica
                </Text>
              </Box>
              <Box
                bg="rgba(255,255,255,0.15)"
                p={3}
                borderRadius="lg"
                textAlign="center"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  Longhorn Storage
                </Text>
                <Text color="whiteAlpha.800" fontSize="xs">
                  Distributed
                </Text>
              </Box>
              <Box
                bg="rgba(255,255,255,0.15)"
                p={3}
                borderRadius="lg"
                textAlign="center"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  Monitoring
                </Text>
                <Text color="whiteAlpha.800" fontSize="xs">
                  Prometheus
                </Text>
              </Box>
            </SimpleGrid>

            {/* Backup & Security */}
            <VStack spacing={3}>
              <Text fontSize="sm" fontWeight="600" color="white">
                Operations
              </Text>
              <Box
                bg="rgba(255,255,255,0.2)"
                p={3}
                borderRadius="lg"
                textAlign="center"
                w="full"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  Automated Backups
                </Text>
                <Text color="whiteAlpha.800" fontSize="xs">
                  R2 Storage
                </Text>
              </Box>
              <Box
                bg="rgba(255,255,255,0.2)"
                p={3}
                borderRadius="lg"
                textAlign="center"
                w="full"
              >
                <Text color="white" fontSize="sm" fontWeight="500">
                  Network Policies
                </Text>
                <Text color="whiteAlpha.800" fontSize="xs">
                  Security
                </Text>
              </Box>
            </VStack>
          </Grid>
        </VStack>
      </Box>
    </VStack>
  );
}
