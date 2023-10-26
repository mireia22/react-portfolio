import React, { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { STUDIES_DATA } from "../../data/data";
import { useSectionInView } from "../../Hooks/Hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Studies = () => {
  const { ref } = useSectionInView("Studies");

  return (
    <section
      id="studies"
      ref={ref}
      className="scroll-mt-30 bg-stars-pattern w-full h-full sm:scroll-mt-[6rem] p-8
      "
    >
      <SectionHeading>Studies</SectionHeading>
      <VerticalTimeline lineColor="#f4e8fa">
        {STUDIES_DATA.map((study, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f4e8fa",
                border: "1px solid rgba(0,0,0,0.1)",
                padding: "1rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #f4e8fa",
              }}
              date={study.year}
              dateClassName="text-purple-dark sm:text-font sm:mx-2 font-bold "
              icon={study.icon}
              iconStyle={{
                background: "#e9d5ff",
                color: "#3b0764",
              }}
            >
              <h2 className="text-2xl mb-3 font-semibold capitalize text-font">
                {study.title}
              </h2>
              <p className=" text-purple-dark ">
                {Object.values(study.description).join(", ") + "."}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Studies;
