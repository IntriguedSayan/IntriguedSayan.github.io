import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import {PhoneIcon} from "@chakra-ui/icons"
import {MdEmail} from "react-icons/md"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import "./Skills.css"
import "./Contact.css"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Contact(){

   useEffect(()=>{
    Aos.init({duration:2000})
   },[]) 
   

    return(
        <Box minH={"85vh"}  >
                <Text id="CONTACT" className="headertext"  fontSize={{base:"xl",md:"2xl",lg:"5xl"}}  color="white" m={"5% 0 5% 15%"}>Get in Touch</Text>
                <Flex data-aos="slide-up"  width={{base:"75%",md:"65%",lg:"35%"}} gap="5%" m="1% 0 2% 15%">
                    <PhoneIcon color={"white"} fontSize={{base:"medium",md:"xl",lg:"2xl"}} mt={"1.7%"} />  
                    <Text fontSize={{base:"medium",md:"large",lg:"2xl"}} color="white"><a href="tel:+91-9123747665">+91 <span>9123747665</span></a></Text>
                </Flex>
                <Flex data-aos="slide-right"  width={{base:"75%",md:"65%",lg:"35%"}} gap="5%" m="1% 0 2% 15%">
                    <Icon as={MdEmail} color="white" fontSize={"3xl"} mt={"1.5%"}/>
                    <Text fontSize={{base:"medium",md:"large",lg:"2xl"}} color="white" ><a href="mailto:sayan.mid590@gmail.com">sayan.mid590@gmail.com</a></Text>
                </Flex>
                <Flex data-aos="slide-left"  width={{base:"75%",md:"65%",lg:"35%"}} gap="5%" m="1% 0 2% 15%">
                    <Icon as={BsLinkedin} color="white" fontSize={"3xl"} mt={"1.5%"}/>
                    <Text fontSize={{base:"medium",md:"large",lg:"2xl"}} color="white" ><a href="https://www.linkedin.com/in/sayan-mukherjee-5678b2232/" target={"_blank"} rel="noreferrer">LinkedIn</a></Text>
                </Flex>
                <Flex width={{base:"75%",md:"65%",lg:"35%"}} gap="5%" m="1% 0 0 15%">
                    <Icon as={BsGithub} color="white" fontSize={{base:"medium",md:"large",lg:"2xl"}} mt={"1.5%"}/>
                    <Text fontSize={{base:"medium",md:"large",lg:"2xl"}} color="white" ><a href="https://github.com/IntriguedSayan"  target={"_blank"}  rel="noreferrer">GitHub</a></Text>
                </Flex>
                
        </Box>
    )
}