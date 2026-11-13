import React from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  ArrowOutward,
  DescriptionOutlined,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { Bio } from "../../data";
import HeroImg from "../../assets/images/Abhishek.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import StarCanvas from "../canvas/Stars";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(52, 227, 160, 0.55); }
  70% { box-shadow: 0 0 0 9px rgba(52, 227, 160, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 227, 160, 0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const HeroRoot = styled.section`
  position: relative;
  padding: 150px 24px 72px;

  @media (max-width: 960px) {
    padding: 120px 16px 48px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  /* Soft colour washes behind the content. */
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(110px);
  }

  &::before {
    width: 520px;
    height: 520px;
    top: -160px;
    left: -120px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.16;
  }

  &::after {
    width: 480px;
    height: 480px;
    top: 80px;
    right: -140px;
    background: ${({ theme }) => theme.secondary};
    opacity: 0.14;
  }
`;

const Orbit = styled.div`
  position: absolute;
  top: 50%;
  right: max(0px, calc(50% - 620px));
  transform: translateY(-50%);
  opacity: 0.7;

  @media (max-width: 960px) {
    display: none;
  }
`;

const Inner = styled.div`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
  align-items: center;
  gap: 56px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Copy = styled.div`
  @media (max-width: 960px) {
    order: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 12px;
  margin-bottom: 26px;
  font-size: 13px;
  color: ${({ theme }) => theme.textMuted};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.surface};
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  animation: ${pulse} 2.2s infinite;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(40px, 6.4vw, 72px);
  line-height: 1.04;
  font-weight: 700;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.text};
`;

const Greeting = styled.span`
  display: block;
  font-size: 0.42em;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 10px;
`;

const Name = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const RoleLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  margin-top: 22px;
  min-height: 60px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(15px, 1.9vw, 19px);
  line-height: 30px;
  color: ${({ theme }) => theme.textMuted};

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.textDim};
`;

const Role = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const Description = styled.p`
  max-width: 600px;
  margin-top: 10px;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.textMuted};

  @media (max-width: 960px) {
    font-size: 15.5px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 30px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 22px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.onPrimary};
  background: ${({ theme }) => theme.gradient};
  border-radius: ${({ theme }) => theme.radius.pill};
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.primaryGlow};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  svg {
    font-size: 19px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 36px -10px ${({ theme }) => theme.primaryGlow};
  }
`;

const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;

  svg {
    font-size: 19px;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primarySoft};
  }
`;

const Portrait = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  margin-left: auto;
  aspect-ratio: 1;

  @media (max-width: 960px) {
    order: 1;
    max-width: 240px;
    margin: 0 auto;
  }
`;

const Ring = styled.div`
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary},
    transparent 55%,
    ${({ theme }) => theme.primary}
  );
  animation: ${spin} 9s linear infinite;
  filter: drop-shadow(0 0 28px ${({ theme }) => theme.primaryGlow});
`;

const Photo = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 5px solid ${({ theme }) => theme.bg};
`;

const Stats = styled.dl`
  position: relative;
  max-width: 1120px;
  margin: 64px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.surface};
  backdrop-filter: blur(6px);
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 44px;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 22px 24px;
  border-left: 1px solid ${({ theme }) => theme.border};

  &:first-child {
    border-left: none;
  }

  @media (max-width: 768px) {
    padding: 18px;
    &:nth-child(odd) {
      border-left: none;
    }
    &:nth-child(n + 3) {
      border-top: 1px solid ${({ theme }) => theme.border};
    }
  }
`;

const StatValue = styled.dd`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text};
`;

const StatLabel = styled.dt`
  margin-top: 2px;
  font-size: 13.5px;
  color: ${({ theme }) => theme.textMuted};
`;

const rise = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] },
});

const Hero = () => (
  <HeroRoot id="About">
    <Backdrop>
      <StarCanvas />
      <Orbit>
        <HeroBgAnimation />
      </Orbit>
    </Backdrop>

    <Inner>
      <Copy>
        <motion.div {...rise(0)}>
          <Badge>
            <Dot />
            {Bio.availability}
          </Badge>
        </motion.div>

        <motion.div {...rise(0.08)}>
          <Title>
            <Greeting>Hi, I am</Greeting>
            <Name>{Bio.name}</Name>
          </Title>
          <RoleLine>
            <Prompt aria-hidden="true">$ whoami →</Prompt>
            <Role>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 22,
                }}
              />
            </Role>
          </RoleLine>
        </motion.div>

        <motion.div {...rise(0.16)}>
          <Description>{Bio.description}</Description>
        </motion.div>

        <motion.div {...rise(0.24)}>
          <Actions>
            <PrimaryButton
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DescriptionOutlined /> Check Resume <ArrowOutward />
            </PrimaryButton>
            <IconButton
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub /> GitHub
            </IconButton>
            <IconButton
              href={Bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn /> LinkedIn
            </IconButton>
          </Actions>
        </motion.div>
      </Copy>

      <Portrait>
        <motion.div
          style={{ height: "100%" }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Tilt options={{ max: 12, scale: 1.02 }} style={{ height: "100%" }}>
            <Ring />
            <Photo src={HeroImg} alt={Bio.name} />
          </Tilt>
        </motion.div>
      </Portrait>
    </Inner>

    <motion.div {...rise(0.32)}>
      <Stats>
        {Bio.stats.map((stat) => (
          <Stat key={stat.label}>
            <StatLabel>{stat.label}</StatLabel>
            <StatValue>{stat.value}</StatValue>
          </Stat>
        ))}
      </Stats>
    </motion.div>
  </HeroRoot>
);

export default Hero;
