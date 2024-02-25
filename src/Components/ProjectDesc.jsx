import {Flex,List,ListItem,ListIcon,Text} from "@chakra-ui/react";
import {SettingsIcon} from "@chakra-ui/icons"
import "../Page/Projects.css"
import "./ProjectDesc.css"

export default function ProjectDesc({projectName,descOne,descTwo,descThree,descFour,website,gitrepo}){

    return(
        <>
        <Text className="title" fontSize={{base:"xl",md:"2xl",lg:"4xl"}} color="white" mb={"2%"}>{projectName}</Text>
                        <List spacing={4}>
                            <ListItem fontSize={{base:"sm",md:"medium",lg:"large"}} color="white">
                                <ListIcon as={SettingsIcon} color="white"/>
                                 {descOne}
                                 
                            </ListItem>
                            <ListItem fontSize={{base:"sm",md:"medium",lg:"large"}} color="white">
                                <ListIcon as={SettingsIcon} color="white"/>
                                 {descTwo}
                                
                            </ListItem> 
                            <ListItem fontSize={{base:"sm",md:"medium",lg:"large"}} color="white">
                                <ListIcon as={SettingsIcon} color="white"/>
                                 {descThree}
                                 
                            </ListItem> 
                            <ListItem fontSize={{base:"sm",md:"medium",lg:"large"}} color="white">
                                <ListIcon as={SettingsIcon} color="white"/>
                                 {descFour}
                               
                            </ListItem>
                        </List>
                        <Flex justify={"space-evenly"}>
                        <Text className="linktext" textAlign={"center"}  width={{base:"50%",md:"50%",lg:"50%"}} mb={"2%"} fontSize={{base:"smaller",md:"sm",lg:"medium"}}><a href={website} target="_blank" rel="noreferrer">WEBSITE</a></Text>
                        <Text className="linktext" textAlign={"center"} width={"50%"} mb={"2%"} fontSize={{base:"smaller",md:"sm",lg:"medium"}}><a href={gitrepo} target="_blank" rel="noreferrer">GITHUB REPO</a></Text>
                        </Flex>
        </>
    )
}