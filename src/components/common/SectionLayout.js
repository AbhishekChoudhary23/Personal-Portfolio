import React from "react";
import styled from "styled-components";
import Reveal from "./Reveal";

const SectionRoot = styled.section`
  position: relative;
  padding: 88px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

const Header = styled.header`
  max-width: 680px;
  margin-bottom: 44px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 14px;

  &::after {
    content: "";
    width: 48px;
    height: 1px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.5;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(30px, 4.4vw, 44px);
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  margin-top: 14px;
  font-size: 17px;
  color: ${({ theme }) => theme.textMuted};

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

/**
 * Standard page section: numbered eyebrow, title, optional lead paragraph,
 * then the section body.
 */
const Section = ({ id, index, title, description, children }) => (
  <SectionRoot id={id} aria-labelledby={`${id}-title`}>
    <Container>
      <Reveal>
        <Header>
          <Eyebrow>
            {index} / {title.toLowerCase()}
          </Eyebrow>
          <Title id={`${id}-title`}>{title}</Title>
          {description && <Description>{description}</Description>}
        </Header>
      </Reveal>
      {children}
    </Container>
  </SectionRoot>
);

export default Section;
