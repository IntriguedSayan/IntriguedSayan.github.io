import { Box,Image, Text, Grid} from "@chakra-ui/react";

import chakra from "../assets/SVGs/chakraui.svg"
import git from "../assets/SVGs/git-icon.svg"
import css from "../assets/SVGs/css.svg"
import html from "../assets/SVGs/html5.svg"
import js from "../assets/SVGs/js-official.svg"
import material from "../assets/SVGs/material-ui.svg"
import mongodb from "../assets/SVGs/mongodb-logo.svg"
import nodejs from "../assets/SVGs/nodejs-1-logo.svg"
import redux from "../assets/SVGs/reduxLogo.svg"
import react from "../assets/react.svg"
import bootstrap from "../assets/SVGs/bootstrap-4-logo.svg"
import jestsvg from "../assets/SVGs/jest-svg.svg"
import expresssvg from "../assets/SVGs/express-svg.svg"
import "./Skills.css"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Skills(){

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
   

    return(
        <Box>
            <Box  display="inline-block" m={"17% 0 0 90%"}>
            {/* <DrawerSet buttonName={"MENU"}/> */}
            </Box>
           <Text id="SKILLS" className="headertext" fontSize={{base:"xl",md:"2xl",lg:"5xl"}} fontWeight="bold" m="2% 0 4% 15%" color="white" data-aos="slide-up" >Skills & TechStacks</Text>
           {/* 1st row */}
           <Grid gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}}  width={{base:"85%",md:"75%",lg:"90%"}} m="auto">
           {/* <Flex data-aos="flip-left" width="70%" m={"auto"} justify="space-evenly"> */}
           <Box width="80%" data-aos="zoom-in">
            <Image src={html} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>HTML5</Text>
           </Box>
           <Box  width="80%" data-aos="zoom-in">
            <Image src={css} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>CSS3</Text>
           </Box>
           <Box  width="80%" data-aos="zoom-in">
            <Image src={js} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>JavaScript</Text>
           </Box>
           <Box  width="80%" data-aos="zoom-in">
            <Image src={react} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>React</Text>
           </Box>
           {/* </Flex> */}
            {/* 2nd row */}
           {/* <Flex data-aos="fade-right" width="70%" m={"auto"} justify="space-evenly"> */}
            <Box  width="80%" data-aos="zoom-in">
            <Image src={redux} width="50%" height={"50%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>Redux</Text>
           </Box>
           <Box  width="80%" data-aos="zoom-in">
            <Image src={chakra} width="50%" height={"50%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>Chakra-UI</Text>
           </Box>
           <Box  width="80%"  data-aos="zoom-in">
            <Image src={material} width="50%" height={"50%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>Material-UI</Text>
           </Box>
           <Box  width="80%" data-aos="zoom-in">
            <Image src={bootstrap} width="50%" height={"50%"} m="auto"mr={"14%"} />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"} ml="7%">Bootstrap</Text>
           </Box>
           {/* </Flex> */}
           {/* 3rd row */}
           {/* <Flex data-aos="fade-left" width="70%" m={"auto"}> */}
           <Box  width="80%" data-aos="zoom-in">
            <Image src={nodejs} width="50%" height={"50%"} m="auto"/>
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>NODE JS</Text>
           </Box>
           <Box  width="80%" data-aos="zoom-in">
            <Image src={mongodb} width="60%" height={"60%"} m="auto"/>
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"0%"}>MONGO DB</Text>
           </Box>
           <Box  width="60%" height={"90%"} ml={"10%"} background={"white"} mt="2%" data-aos="zoom-in">
            <Image src={expresssvg} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="black" textAlign={"center"} fontWeight="bold" mt={"0%"}>EXPRESS</Text>
           </Box>
           <Box  width="80%" data-aos="zoom-in">
            <Image src={git} width="50%" height={"50%"} m="auto"/>
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>GIT</Text>
           </Box>
           <Box  width="80%" mt={{base:"2%",md:"2%"}} data-aos="zoom-in">
            <Image src={jestsvg} width="50%" height={"50%"} m="auto"/>
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>JEST</Text>
           </Box>
           {/* </Flex> */}
           </Grid>
        </Box>
    )

}