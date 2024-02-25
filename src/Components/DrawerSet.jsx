import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,Button,useDisclosure,Box,Text,} from '@chakra-ui/react'
import { useRef } from 'react'
import { Link } from 'react-scroll'

import "./DrawerSet.css"

export default function DrawerSet({buttonName}){
    const { isOpen, onOpen, onClose } = useDisclosure ()
    const btnRef = useRef ()
    

    return (
      <Box>
        <Button ref={btnRef} colorScheme="cyan" size={"lg"} onClick={onOpen}>
          {buttonName}
        </Button >
        <Box >
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent backgroundImage={'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100'}>
            
            <Box className="bodybox">
            
            <DrawerHeader>MENU</DrawerHeader>
            
            <DrawerBody  className="drawer">
            <Link to="ABOUT" smooth={true} ><Text className="drawerMenuOne" fontSize={{base:"large",md:"large",lg:"x-large"}} backgroundColor="transparent" mt={"15%"} p={"4%"}
            >About Me</Text></Link>

            <Link to="PROJECTS" smooth={true} ><Text className="drawerMenuTwo" fontSize={{base:"large",md:"large",lg:"x-large"}} backgroundColor="transparent" mt={"15%"} p={"4%"}
            >Projects</Text></Link>

            <Link to="SKILLS" smooth={true}  ><Text className="drawerMenuThree" fontSize={{base:"large",md:"large",lg:"x-large"}} backgroundColor="transparent" mt={"15%"} p={"4%"}
            >Skills & TechStacks</Text></Link>

            <Link to="CONTACT" smooth={true} ><Text className="drawerMenuFour" fontSize={{base:"large",md:"large",lg:"x-large"}} backgroundColor="transparent" mt={"15%"} p={"4%"}>Contact Info</Text></Link>

            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
            </Box>
          </DrawerContent>
        </Drawer>
        </Box>
      </Box>
    )
  }

  // backgroundColor={" #50E3C2;"} backgroundImage={"radialGradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%)"}