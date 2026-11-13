import React from "react";
import styled from "styled-components";
import TimelineCard, { TimelineBody } from "../common/TimelineCard";

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ education }) => {
  if (!education) return null;
  const { img, school, degree, date, grade, desc } = education;

  return (
    <TimelineCard img={img} title={school} subtitle={degree} date={date}>
      {grade && (
        <Grade>
          <b>Grade: </b>
          {grade}
        </Grade>
      )}
      {desc && <TimelineBody>{desc}</TimelineBody>}
    </TimelineCard>
  );
};

export default EducationCard;
