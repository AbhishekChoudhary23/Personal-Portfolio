import React from "react";
import styled from "styled-components";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";
import { surface, surfaceHover } from "./CardStyles";

const RAIL = 44; // width of the rail column that holds the logo marker

export const Timeline = styled.ol`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;

  /* The rail */
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: ${RAIL / 2}px;
    width: 1px;
    background: linear-gradient(
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.border} 30%,
      ${({ theme }) => theme.border}
    );
  }

  @media (max-width: 640px) {
    &::before {
      display: none;
    }
  }
`;

const Item = styled.li`
  position: relative;
  padding-left: ${RAIL + 24}px;

  @media (max-width: 640px) {
    padding-left: 0;
  }
`;

const Marker = styled(ImageWithFallback)`
  position: absolute;
  left: 0;
  top: 22px;
  width: ${RAIL}px;
  height: ${RAIL}px;
  border-radius: 50%;
  object-fit: cover;
  font-size: 14px;
  background-color: ${({ theme }) => theme.bgElevated};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  box-shadow: 0 0 0 6px ${({ theme }) => theme.bg};

  @media (max-width: 640px) {
    position: static;
    box-shadow: none;
    flex-shrink: 0;
  }
`;

const Panel = styled.article`
  ${surface}
  ${surfaceHover}
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 640px) {
    padding: 20px 18px;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px 20px;
  flex-wrap: wrap;
`;

const HeadMain = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
`;

/* On small screens the marker moves inside the card header. */
const InlineMarker = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

const RailMarker = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 20px;
  line-height: 1.25;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media (max-width: 640px) {
    font-size: 17px;
  }
`;

const Subtitle = styled.div`
  margin-top: 2px;
  font-size: 14.5px;
  color: ${({ theme }) => theme.textMuted};
`;

const DateBadge = styled.time`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primarySoft};
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  white-space: nowrap;
`;

export const TimelineBody = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.textMuted};
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

/** One entry on the Experience / Education timeline. */
const TimelineCard = ({ img, title, subtitle, date, children }) => (
  <Item>
    <RailMarker>
      <Marker src={img} alt={subtitle} />
    </RailMarker>
    <Reveal>
      <Panel>
        <Head>
          <HeadMain>
            <InlineMarker>
              <Marker src={img} alt="" label={subtitle} />
            </InlineMarker>
            <div>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </div>
          </HeadMain>
          <DateBadge>{date}</DateBadge>
        </Head>
        {children}
      </Panel>
    </Reveal>
  </Item>
);

export default TimelineCard;
