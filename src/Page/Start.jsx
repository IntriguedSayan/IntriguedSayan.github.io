import HeroLine from "../Components/HeroLine";
import { Box, Flex, Text } from "@chakra-ui/react";
import "./Start.css"
import DrawerSet from "../Components/DrawerSet";

export default function Start(){

    return(
        <Flex justifyContent={"center"} h="100vh" alignItems="center" mb={"10%"}>
        <Box width={"40%"}  >
        <Box className="strt"  width={"95%"} p="1% 1% 2% 3%">        
        <HeroLine/>
        </Box>
        <Box  className="resume-text">
        <Text fontSize={{base:"medium",md:"large",lg:"2xl"}}><a href="https://drive.google.com/file/d/1kkqU5QqzGSD9LH9utzKEGUzB0WFICWfU/view?usp=sharing" target="_blank" rel="noreferrer">VIEW RESUME</a></Text>
        </Box>
        </Box>
        <Box>
        <DrawerSet buttonName={"GET STARTED"}/>
        </Box>
        </Flex>
    )
} 