import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimeLineComp from "../Components/TimeLineComp";
import { projects } from "../data/data.js";
import { Text } from "@chakra-ui/react";

function TimeLine() {
  return (
    <>
      <Text
        id="PROJECTS"
        className="headertext"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        color="white"
        m="2% 5% 5% 5%"
      >
        Professional Experience
      </Text>
      <VerticalTimeline>
        {projects.map((elem, i) => (
          <TimeLineComp
            name={elem.name}
            about={elem.about}
            techstack={elem.techstack}
            description={elem.description}
            time={
              (i === 0 && "Nov,2023 - Present, Software Developer") ||
              (i === 3 && "Nov,2022 - Oct,2023, Junior Developer")
            }
          />
        ))}
      </VerticalTimeline>
    </>
  );
}

export default TimeLine;
