import { Box, Text } from "@chakra-ui/react";
import "./Projects.css";
import ProjectBox from "../Components/ProjectBox";
import rsvg from "../assets/react.svg";
import { SiChakraui } from "react-icons/si";
import hubOne from "../assets/Hubspot/Screenshot (73).png";
import hubTwo from "../assets/Hubspot/Screenshot (74).png";
import hubThree from "../assets/Hubspot/Screenshot (75).png";
import hubFour from "../assets/Hubspot/Screenshot (78).png";
import rdxvg from "../assets/SVGs/reduxLogo.svg";

export default function Projects() {
  // useEffect(()=>{
  //     Aos.init({duration:2000})
  // },[])

  return (
    <Box>
      <Text
        id="PROJECTS"
        className="headertext"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        color="white"
        m="2% 0 0 10%"
      >
        Personal Projects
      </Text>
      <Text
        fontSize={{ base: "medium", md: "medium", lg: "large" }}
        color="white"
        m="0 0 2% 10%"
      >
        Each of the Project has it's own flavour
      </Text>
      <Box>
        <ProjectBox
          firstSlide={hubOne}
          secondSlide={hubTwo}
          thirdSlide={hubThree}
          fourthSlide={hubFour}
          projectName={"Hubspot Clone"}
          techOne={rsvg}
          d1="block"
          techThree={SiChakraui}
          tThreeColor="skyblue"
          techTwo={rdxvg}
          d2="block"
          d3={"block"}
          gitrepo={"https://github.com/IntriguedSayan/Hubspot-clone"}
        //   website={"https://clone-of-hubspot.netlify.app/"}
          aos="zoom-in"
        />
      </Box>
    </Box>
  );
}
