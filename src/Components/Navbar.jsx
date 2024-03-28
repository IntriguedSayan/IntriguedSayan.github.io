import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Navbar.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const scrolling = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  console.log(navbar);
  window.addEventListener("scroll", scrolling);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Flex
      backgroundColor="#1a202c"
      boxShadow={"dark-lg"}
      justifyContent="space-between"
      alignItems={"center"}
      position="fixed"
      width={"100%"}
      top="0"
      zIndex="2"
      data-aos="zoom-in"
      display={navbar ? "flex" : "none"}
      transition={"0.3s ease-in-out"}
    >
      <Text
        className="logo"
        fontSize={{ base: "large", md: "large", lg: "4xl" }}
        ml="3%"
      >
        SM
      </Text>
      <Flex
        width={"80%"}
        height="80px"
        alignSelf="end"
        justifyContent={"space-around"}
        alignItems="center"
      >
        <Box cursor={"pointer"}>
          <Link to="ABOUT" smooth={true} duration={500}>
            {" "}
            <Text
              color={"white"}
              fontSize={{ base: "md", md: "large", lg: "xl" }}
            >
              About Me
            </Text>
          </Link>
        </Box>
        <Box cursor={"pointer"}>
          <Link to="PROJECTS" smooth={true} duration={500}>
            <Text
              color={"white"}
              fontSize={{ base: "small", md: "large", lg: "xl" }}
            >
              Projects
            </Text>
          </Link>
        </Box>
        <Box cursor={"pointer"}>
          <Link to="SKILLS" smooth={true} duration={500}>
            <Text
              color={"white"}
              fontSize={{ base: "small", md: "large", lg: "xl" }}
            >
              Skills
            </Text>
          </Link>
        </Box>
        <Box cursor={"pointer"}>
          <Link to="CONTACT" smooth={true} duration={500}>
            {" "}
            <Text
              color={"white"}
              fontSize={{ base: "small", md: "large", lg: "xl" }}
            >
              Contact
            </Text>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
