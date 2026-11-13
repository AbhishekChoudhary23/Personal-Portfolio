import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../data";
import ExperienceCard from "../cards/ExperienceCard";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const Experience = () => {
  return (
    <SectionContainer id="Experience">
      <SectionWrapper>
        <SectionTitle>Experience</SectionTitle>
        <SectionDesc>
          My work experience as a DevOps &amp; Software Engineer automating
          cloud infrastructure and CI/CD pipelines.
        </SectionDesc>

        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={`experience-${experience.id}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Experience;
