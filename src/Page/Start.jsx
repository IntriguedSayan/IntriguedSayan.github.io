import HeroLine from "../Components/HeroLine";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import "./Start.css";
import DrawerSet from "../Components/DrawerSet";

export default function Start() {
  return (
    <Flex justifyContent={"center"} h="100vh" alignItems="center" mb={"10%"}>
      <Box width={"40%"}>
        <Box className="strt" width={"95%"} p="1% 1% 2% 3%">
          <HeroLine />
        </Box>
        <Box className="resume-text">
          
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1kkqU5QqzGSD9LH9utzKEGUzB0WFICWfU/view?usp=sharing",
                  "_blank",
                  "noopener"
                )
              }
              background={"transparent"}
              _hover={{ background: "transparent" }}
            >
              <Text color={"whiteAlpha.800"} fontSize={{ base: "medium", md: "large", lg: "2xl" }}>
                VIEW RESUME
              </Text>
            </Button>

        </Box>
      </Box>
      <Box>
        <DrawerSet buttonName={"GET STARTED"} />
      </Box>
    </Flex>
  );
}
