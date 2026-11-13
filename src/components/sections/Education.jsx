import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../../data";
import EducationCard from "../cards/EducationCard";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const Education = () => {
  return (
    <SectionContainer id="Education" $marginTop="0px">
      <SectionWrapper>
        <SectionTitle>Education</SectionTitle>
        <SectionDesc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </SectionDesc>

        <VerticalTimeline>
          {education.map((item) => (
            <EducationCard key={`education-${item.id}`} education={item} />
          ))}
        </VerticalTimeline>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Education;
