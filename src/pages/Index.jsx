import React from "react";
import { Box, Heading, Text, Image, Grid, Link, Container, Flex, Spacer } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Website Redesign",
    description: "Redesigned the user experience of an e-commerce website, improving navigation and checkout process.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHx8fDE3MTA0MDI3Njh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Mobile App for Fitness Tracking",
    description: "Designed a mobile app that allows users to track their workouts, set goals, and monitor progress.",
    image: "https://images.unsplash.com/photo-1554260570-c7068c223285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBhcHAlMjBkZXNpZ258ZW58MHx8fHwxNzEwNDAyNzY4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Travel Booking Platform",
    description: "Created a user-friendly interface for a travel booking platform, simplifying the search and reservation process.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHx8fDE3MTA0MDI3Njl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Designed a dashboard for managing multiple social media accounts, with analytics and scheduling features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZCUyMGRlc2lnbnxlbnwwfHx8fDE3MTA0MDI3Njl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const Index = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Flex align="center" mb={8}>
          <Heading as="h1" size="xl" mr={4}>
            Gigi's UX Portfolio
          </Heading>
          <Spacer />
          <Link href="https://github.com/gigi" isExternal mr={4}>
            <FaGithub size={24} />
          </Link>
          <Link href="https://linkedin.com/in/gigi" isExternal mr={4}>
            <FaLinkedin size={24} />
          </Link>
          <Link href="mailto:gigi@example.com" isExternal>
            <FaEnvelope size={24} />
          </Link>
        </Flex>
        <Text fontSize="xl" mb={8}>
          Hi, I'm Gigi, a UX designer passionate about creating intuitive and engaging user experiences. Here are some of my selected projects:
        </Text>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={8}>
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <Box borderWidth={1} borderRadius="lg" p={4}>
                <Image src={project.image} alt={project.title} mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
              </Box>
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
