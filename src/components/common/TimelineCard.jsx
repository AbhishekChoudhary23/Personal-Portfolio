import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";
import ImageWithFallback from "./ImageWithFallback";

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  color: "#fff",
  boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
  backgroundColor: "rgba(17, 25, 40, 0.83)",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  borderRadius: "6px",
};

const contentArrowStyle = {
  borderRight: "7px solid rgba(255, 255, 255, 0.3)",
};

const iconStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
};

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Logo = styled(ImageWithFallback)`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const DateText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "80"};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const TimelineBody = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + "99"};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

/** Shared timeline entry used by both the Experience and Education sections. */
const TimelineCard = ({ img, title, subtitle, date, children }) => (
  <VerticalTimelineElement
    icon={<ImageWithFallback src={img} alt={subtitle} style={iconStyle} />}
    contentStyle={contentStyle}
    contentArrowStyle={contentArrowStyle}
    date={date}
  >
    <Top>
      <Logo src={img} alt={subtitle} />
      <Heading>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <DateText>{date}</DateText>
      </Heading>
    </Top>
    {children}
  </VerticalTimelineElement>
);

export default TimelineCard;
