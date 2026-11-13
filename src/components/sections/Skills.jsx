import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "../../data";
import { Tilt } from "react-tilt";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 450px;
  min-width: 300px;
  min-height: 280px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(54, 230, 23, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 24px;
  }
`;

const SkillTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + "80"};
  border: 1px solid ${({ theme }) => theme.text_primary + "80"};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

/** Decorative icon; dropped from the tree if the remote SVG fails to load. */
const SkillIcon = ({ src }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <SkillImage
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

const Skills = () => {
  return (
    <SectionContainer id="Skills" $marginTop="0px">
      <SectionWrapper>
        <SectionTitle>Skills</SectionTitle>
        <SectionDesc>
          Core Cloud, DevOps, SRE, Infrastructure as Code, and Software
          Engineering skills developed across production environments.
        </SectionDesc>

        <SkillsContainer>
          {skills.map((skill) => (
            <Tilt key={skill.title}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem key={item.name}>
                      {item.image && <SkillIcon src={item.image} />}
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Skills;
