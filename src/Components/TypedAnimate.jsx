import { Text } from '@chakra-ui/react'
import React from 'react'
import {TypeAnimation} from "react-type-animation"
import "./TypedAnimate.css"
const TypedAnimate = () => {

  return (
    <Text className='gradien' fontSize={{base:"x-large",md:"2xl",lg:"4xl"}} fontWeight="bold" m={{base:"3% 0 1% 5%",md:"1% 0 0 10%",lg:"2% 0 1% 25%"}} >
    <TypeAnimation
            sequence={["Hi,",
            1000,
            "I am Sayan Mukherjee,",
            1000,
            "a MERN Developer.",
            1000,
            ""
            ]}
            cursor={true}
            repeat={Infinity}
            style={{color:"white"}}
       />  
    </Text>
  )
}

export default TypedAnimate