import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimeLineComp from "../Components/TimeLineComp";
import { projects } from "../data/data.js";

function TimeLine() {
  return (
    <>
      <VerticalTimeline>
        {projects.map((elem) => (
          <TimeLineComp name={elem.name} about={elem.about} techstack={elem.techstack}
          description={elem.description}/>
        ))}
      </VerticalTimeline>
    </>
  );
}

export default TimeLine;
