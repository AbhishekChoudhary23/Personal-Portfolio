import React from "react";
import { education } from "../../data";
import EducationCard from "../cards/EducationCard";
import Section from "../common/SectionLayout";
import { Timeline } from "../common/TimelineCard";

const Education = () => (
  <Section
    id="Education"
    index="05"
    title="Education"
    description="My education has been a journey of self-discovery and growth. My educational details are as follows."
  >
    <Timeline>
      {education.map((item) => (
        <EducationCard key={item.id} education={item} />
      ))}
    </Timeline>
  </Section>
);

export default Education;
