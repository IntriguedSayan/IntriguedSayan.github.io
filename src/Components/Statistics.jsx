import { Badge, Box,  Grid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "./ProjectDesc.css"
import AOS from "aos";
import 'aos/dist/aos.css';

const Statistics = () => {

    useEffect (() => {

        AOS.init({duration:2000})
    
      
    }, [])

  return (
        <Box>
            <Text  className="title"  fontSize={{base:"xl",md:"2xl",lg:"5xl"}}  color="white" m={"5% 0 2% 15%"}>Statistics</Text>
            <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}}  width={{base:"85%",md:"75%",lg:"90%"}} m="auto" gap={"2"}>
                <Box border={"1px solid cyan"} data-aos="zoom-in" borderRadius="10px" >
                    <Badge width={"60%"} ml="20%" mt={"2%"} height={"60px"} fontSize="2xl" textAlign={"center"} borderRadius="10px" colorScheme="pink">1300+</Badge>
                    <Text fontSize={"xl"} textAlign={"center"} color="white">Hours</Text>
                    <Text fontSize={"large"} textAlign={"center"} color="white">of Full Stack Coding</Text>
                </Box>
                <Box border={"1px solid cyan"} data-aos="zoom-in" borderRadius="10px" >
                    <Badge width={"60%"} ml="20%" mt={"2%"} height={"60px"} fontSize="2xl" textAlign={"center"} borderRadius="10px" colorScheme="pink">15+</Badge>
                    <Text fontSize={"xl"} textAlign={"center"} color="white">Projects</Text>
                    <Text fontSize={"large"} textAlign={"center"} color="white">Done</Text>
                </Box>
                <Box border={"1px solid cyan"} data-aos="zoom-in" borderRadius="10px" >
                    <Badge width={"60%"} ml="20%" mt={"2%"} height={"60px"} fontSize="2xl" textAlign={"center"} borderRadius="10px" colorScheme="pink">100+</Badge>
                    <Text fontSize={"xl"} textAlign={"center"} color="white">Hours Soft</Text>
                    <Text fontSize={"large"} textAlign={"center"} color="white">Skills Sessions</Text>
                </Box>
            </Grid>
        </Box>
  )
}

export default Statistics