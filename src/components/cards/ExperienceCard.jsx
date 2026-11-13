import React from "react";
import styled from "styled-components";
import { ArrowOutward } from "@mui/icons-material";
import TimelineCard, { TimelineBody } from "../common/TimelineCard";
import { Tags, Tag, CardLink } from "../common/CardStyles";

const Highlights = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Highlight = styled.li`
  position: relative;
  padding-left: 20px;
  line-height: 1.6;

  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 0.62em;
    width: 6px;
    height: 6px;
    border-radius: 2px;
    background: ${({ theme }) => theme.primary};
    transform: rotate(45deg);
  }

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }
`;

/** Splits "Label: rest of sentence" so the label can be emphasised. */
const splitHighlight = (point) => {
  const match = /^([^:]{2,40}):\s+(.*)$/s.exec(point);
  return match ? { label: match[1], text: match[2] } : { text: point };
};

const ExperienceCard = ({ experience }) => {
  if (!experience) return null;
  const { img, role, company, date, desc, highlights, skills, doc } =
    experience;

  return (
    <TimelineCard img={img} title={role} subtitle={company} date={date}>
      <TimelineBody>
        {desc && <p>{desc}</p>}
        {highlights?.length > 0 && (
          <Highlights>
            {highlights.map((point) => {
              const { label, text } = splitHighlight(point);
              return (
                <Highlight key={point}>
                  {label && <strong>{label}: </strong>}
                  {text}
                </Highlight>
              );
            })}
          </Highlights>
        )}
        {skills?.length > 0 && (
          <Tags aria-label="Skills">
            {skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </Tags>
        )}
        {doc && (
          <div>
            <CardLink href={doc}>
              View Document <ArrowOutward />
            </CardLink>
          </div>
        )}
      </TimelineBody>
    </TimelineCard>
  );
};

export default ExperienceCard;
