import React from "react";
import styled from "styled-components";
import TimelineCard, { TimelineBody } from "../common/TimelineCard";

const HighlightsList = styled.ul`
  margin: 8px 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  line-height: 1.45;
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const DocLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  align-self: flex-start;
  &:hover {
    text-decoration: underline;
  }
`;

const ExperienceCard = ({ experience }) => {
  if (!experience) return null;
  const { img, role, company, date, desc, highlights, skills, doc } =
    experience;

  return (
    <TimelineCard img={img} title={role} subtitle={company} date={date}>
      <TimelineBody>
        {desc && <p>{desc}</p>}
        {highlights?.length > 0 && (
          <HighlightsList>
            {highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </HighlightsList>
        )}
        {skills?.length > 0 && (
          <Skills>
            <b>Skills:</b>
            <SkillList>
              {skills.map((skill) => (
                <span key={skill}>• {skill}</span>
              ))}
            </SkillList>
          </Skills>
        )}
      </TimelineBody>
      {doc && (
        <DocLink href={doc} target="_blank" rel="noopener noreferrer">
          View Document
        </DocLink>
      )}
    </TimelineCard>
  );
};

export default ExperienceCard;
