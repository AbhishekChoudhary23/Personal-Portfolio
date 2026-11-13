import React from "react";
import styled from "styled-components";
import TimelineCard, { TimelineBody } from "../common/TimelineCard";

const Grade = styled.div`
  display: inline-flex;
  align-self: flex-start;
  align-items: baseline;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 14px;
  color: ${({ theme }) => theme.text};

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.textDim};
  }
`;

const EducationCard = ({ education }) => {
  if (!education) return null;
  const { img, school, degree, date, grade, desc } = education;

  return (
    <TimelineCard img={img} title={school} subtitle={degree} date={date}>
      <TimelineBody>
        {grade && (
          <Grade>
            <span>Grade</span>
            {grade}
          </Grade>
        )}
        {desc && <p>{desc}</p>}
      </TimelineBody>
    </TimelineCard>
  );
};

export default EducationCard;
