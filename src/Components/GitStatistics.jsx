import { Box, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "./ProjectDesc.css"
import AOS from "aos";
import 'aos/dist/aos.css';

const GitStatistics = () => {

  useEffect (() => {

    AOS.init({duration:2000})

  
}, [])

  return (
    <Box mt={"10%"} >
        <Text className='title' fontSize={{base:"xl",md:"2xl",lg:"4xl"}} ml="10%" mb="5%"  >Github Statistics </Text>
        <Box width={"50%"} m="auto" mb={"3%"}>
          <Image  data-aos="zoom-in" src='https://github-readme-streak-stats.herokuapp.com/?user=intriguedsayan&theme=highcontrast'/>
        </Box>
        <Box width={"70%"} m="auto" gap={"3%"}>
            <Image data-aos="zoom-in" width={"50%"} m="auto" mr={"33%"} src='https://github-readme-stats.vercel.app/api/top-langs?username=intriguedsayan&show_icons=true&locale=en&layout=compact&theme=highcontrast'/>

            {/* <Image data-aos="zoom-in" width={"50%"} src='https://github-readme-stats.vercel.app/api?username=IntriguedSayan&show_icons=true&theme=highcontrast&count_private=true'/> */}
        </Box>
    </Box>    
  )
}

export default GitStatistics