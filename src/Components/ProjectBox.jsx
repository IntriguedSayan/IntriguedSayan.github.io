import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import CarouselComp from "./CarouselComp";
import ProjectDesc from "./ProjectDesc";
import AOS from "aos";
import 'aos/dist/aos.css';
import {ImHtmlFive} from "react-icons/im"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import { useEffect } from "react";

export default function ProjectBox({firstSlide,secondSlide,thirdSlide,fourthSlide,
    projectName,descOne,descTwo,descThree,descFour,techOne,techTwo,techThree,d1="none",d2="none",d3="none",website,gitrepo,aos,tThreeColor}){
    
    useEffect(() => {

        AOS.init({duration:2000})
    
      
    }, [])
    
        

    return(
        <Flex width={"80%"} direction={{base:"column",md:"column",lg:"row"}} m={"2% 0 2% 10%"} alignItems={{base:"center",md:"center",lg:"center"}} padding="0 2% 0 2%" gap={"4%"} border="1px solid white" justify={{md:"center",lg:"space-around"}} data-aos={aos} overflowX="hidden" >

                <Box p={"2% 1% 2% 2%"} width={{base:"95%",md:"95%",lg:"50%"}} height={"70%"}>
                    <CarouselComp firstSlide={firstSlide} secondSlide={secondSlide}
                     thirdSlide={thirdSlide} fourthSlide={fourthSlide}/>

                     <Flex justify={"space-around"} gap="1%">
                     
                        <Image src={techOne}  width="20%" display={d1} height={"20%"} m="10% 0 0 0"/>
                        <Image src={techTwo} width="15%" h={"15%"} color="cyan.500" mt={"10%"} display={d2} />
                        <Icon as={techThree} display={d3} w={"15%"} h={"20%"} m={"10% 0 0 0"} color={tThreeColor} />
                        <Icon as={SiJavascript} width="15%"  height={"20%"} m="10% 0 0 0" color={"yellow.500"} />   
                        <Icon as={ImHtmlFive} w={"15%"} h={"20%"} m={"10% 0 0 0"} color="red.500" />
                        <Icon as={DiCss3} w={"18%"} h={"20%"} m={"8.66% 0 0 0"} color="blue.500" />

                     </Flex>
                </Box>
                <Box className="descbox" width={{base:"90%",md:"90%",lg:"50%"}}>
                       <ProjectDesc projectName={projectName} descOne={descOne} descTwo={descTwo}
                       descThree={descThree}
                       descFour={descFour}
                       website={website}
                       gitrepo={gitrepo}/>
                </Box>
        </Flex>
    )
}