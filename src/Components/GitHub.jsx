import { Box, Center, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./ProjectDesc.css"
import AOS from "aos";
import 'aos/dist/aos.css';

const Github = () => {

    useEffect (() => {

        AOS.init({duration:2000})
    
      
    }, [])


    return (

        <Box w={["90%", "100%"]} margin="auto" p={[0, 10]} my={[0, 10]} data-aos="zoom-in" color={"white"}>
            <Text className='title' fontSize={{base:"xl",md:"2xl",lg:"4xl"}} fontWeight="semibold" ml={"7%"} mb={[5, 10]}>Github Contributions Calender</Text>
            <Center width={"100%"}>
                <GitHubCalendar username='IntriguedSayan'  year={new Date().getFullYear()}  />
            </Center>

        </Box>
    )
}

export default Github