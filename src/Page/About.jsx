import { Box, Flex, Image, Text } from "@chakra-ui/react";
import sayan from "../assets/Sayan_Mukherjee_Photo.jpg"
import "./About.css"
import { useRef } from "react";
import TypedAnimate from "../Components/TypedAnimate";

export default function About(){

    const aboutRef=useRef(null)

    return(
        <Box m={{base:"2% 0 5% 0"}}>
             <Box m={"4% 0 0 90%"}>
        
            </Box>
            <Text  id="ABOUT" className="headertext" fontSize={{base:"3xl",md:"4xl",lg:"5xl"}} m="-6% 0 2% 43%" 
            color={"white"} ref={aboutRef} >Myself</Text>

        <Flex className="abouts" gap="2%" width={{base:"90%",md:"85%",lg:"80%"}} m="auto"
         alignItems={"center"} direction={{base:"column",md:"column",lg:"row"}}
         justifyContent={{base:"space-around",md:"space-around"}}>

            <Box  width={{base:"75%",md:"80%",lg:"120%"}} m="1% 0% 0% 10%" >
            <Image src={sayan}  m="auto"  height={{base:"60%",md:"60%",lg:"100%"}} width={{base:"60%",md:"60%",lg:"100%"}} borderRadius="25%0" alt="Profile Pic" />
            </Box>
            
            
            <Box  data-aos="zoom-in" >
                {/* <Text fontSize={{base:"x-large",md:"2xl",lg:"4xl"}} fontWeight="bold" m={{base:"3% 0 1% 5%",md:"1% 0 0 10%",lg:"2% 0 1% 25%"}} color={"white"}>Hi, I am  <span className="gradien" m={"0 1% 1% 1%"}> Sayan Mukherjee,</span> a <span m={"0 1% 1% 1%"} className="gradien"> MERN Developer.</span></Text> */}
                <TypedAnimate/>
                <Box  width={{base:"90%",md:"85%",lg:"55%"}} m={{base:"auto",md:"auto",lg:"1% 0 1% 25%"}}>
                <Text fontSize={{base:"small",md:"medium",lg:"x-large"}} color="white" fontWeight={"bold"}>I am passionate Full Stack Web Developer adept at engineering robust and user centric web applications. I love to work in exciting projects and collaborating with others while being exposed to the ever evolving technology around us.</Text>
                </Box>
               
            </Box>
            
        </Flex>
        </Box>
    )
}