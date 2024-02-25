import { Box,Text } from "@chakra-ui/react";
import ScreenshotOne from "../assets/YooxScreenshots/Screenshot (669).png" 
import ScreenshotTwo from "../assets/YooxScreenshots/Screenshot (670).png"
import ScreenshotThree from "../assets/YooxScreenshots/Screenshot (671).png"
import ScreenshotFour from "../assets/YooxScreenshots/Screenshot (672).png"
// import decssOne from "../assets/DeccanChronicle/Screenshot (673).png"
// import decssTwo from "../assets/DeccanChronicle/Screenshot (674).png"
// import decssThree from "../assets/DeccanChronicle/Screenshot (676).png"
// import decssFour from "../assets/DeccanChronicle/Screenshot (678).png"
import cart from "../assets/Nature'sBasket/cart.png"
import home from "../assets/Nature'sBasket/home.png"
import offer from "../assets/Nature'sBasket/offer.png"
import signUp from "../assets/Nature'sBasket/sign-up.png"
import "./Projects.css"
import ProjectBox from "../Components/ProjectBox";
import rsvg from "../assets/react.svg"
import {SiChakraui} from "react-icons/si"
import hubOne from "../assets/Hubspot/Screenshot (73).png"
import hubTwo from "../assets/Hubspot/Screenshot (74).png"
import hubThree from "../assets/Hubspot/Screenshot (75).png"
import hubFour from "../assets/Hubspot/Screenshot (78).png"
import rdxvg from "../assets/SVGs/reduxLogo.svg"


export default function Projects(){

    // useEffect(()=>{
    //     Aos.init({duration:2000})
    // },[])
    

    return(
        <Box >
            
            <Text id="PROJECTS" className="headertext"  fontSize={{base:"3xl",md:"4xl",lg:"5xl"}} color="white" m="2% 0 0 10%">Projects</Text>
            <Text fontSize={{base:"medium",md:"medium",lg:"large"}} color="white" m="0 0 2% 10%" >Each of the Project has it's own flavour</Text>
            <Box >
                <ProjectBox firstSlide={hubOne} secondSlide={hubTwo} thirdSlide={hubThree} fourthSlide={hubFour} projectName={"Hubspot Clone"}
                descOne={"HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service."}
                descTwo={"Created Multiple detailed news outlet pages."}
                descThree={"Group Project completed within 5 days with 4 other team members."} descFour={"The authentication was managed with redux."}
                techOne={rsvg} d1="block" techThree={SiChakraui} tThreeColor="skyblue" techTwo={rdxvg} d2="block" d3={"block"} gitrepo={"https://github.com/IntriguedSayan/Hubspot-clone"} website={"https://clone-of-hubspot.netlify.app/"} aos="zoom-in"/>

                <ProjectBox firstSlide={ScreenshotOne} secondSlide={ScreenshotTwo} thirdSlide={ScreenshotThree} fourthSlide={ScreenshotFour} projectName={"YOOX Clone"} descOne={"Yoox is one of the largest luxury e-commerece brand which has hold over the international market."} descTwo={"Individual project completed within 4 days."} descThree={"Created Homepage,LogIn page,SignUp page,Multiple Product Pages & a fully functional Dynamic Cart from the scratch."} descFour={"In Product pages & Cart Page everything is managed through APIs."}
                 techOne={rsvg} d1={"block"} techFour={SiChakraui} d4="block" website={"https://sayanyoox.netlify.app/"} gitrepo={"https://github.com/IntriguedSayan/neighborly-apparatus-1977"} aos="fade-right"  />

                <ProjectBox firstSlide={home} secondSlide={offer} thirdSlide={cart} fourthSlide={signUp} projectName={"Nature's Basket Clone"}
               descOne={"Nature's Basket is India's one of the leading online groccery & staples store brands."}
               descTwo={"Group Project completed within 5 days with 4 other team members."}
               descThree={"Built the LogIn SignUp system,multiple Product Pages from the scratch."}
               descFour={"All the data in cart and product pages were managed by local storage."}    website={"https://nature-sbasket.netlify.app/"} gitrepo={"https://github.com/IntriguedSayan/Nature-sBasket"} aos="fade-left" />

               

               
            </Box>
        </Box>
    )
}