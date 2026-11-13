import React from "react";
import { experiences } from "../../data";
import ExperienceCard from "../cards/ExperienceCard";
import Section from "../common/SectionLayout";
import { Timeline } from "../common/TimelineCard";

const Experience = () => (
  <Section
    id="Experience"
    index="03"
    title="Experience"
    description="My work experience as a DevOps & Software Engineer automating cloud infrastructure and CI/CD pipelines."
  >
    <Timeline>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </Timeline>
  </Section>
);

export default Experience;
