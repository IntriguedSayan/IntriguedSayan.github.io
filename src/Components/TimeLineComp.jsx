import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { Text, Box } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

function TimeLineComp({ name, about, techstack, description, time }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={time ? time : ""}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<FaBriefcase />}
    >
      
        <Text>{name}</Text>
        <Text color={"blackAlpha.900"}>{about}</Text>
     
      <Box display={"flex"} gap={"0.5rem"}>
        <Text className="vertical-timeline-element-subtitle">Techstack :</Text>
        <Text color={"blackAlpha.900"}>{techstack}</Text>
      </Box>
      <Text>Description:</Text>
      <UnorderedList color={"blackAlpha.900"}>
        {description?.map((elem) => (
          <ListItem>{elem}</ListItem>
        ))}
      </UnorderedList>
    </VerticalTimelineElement>
  );
}

export default TimeLineComp;
