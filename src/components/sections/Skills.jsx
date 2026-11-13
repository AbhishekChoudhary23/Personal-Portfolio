import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "../../data";
import Section from "../common/SectionLayout";
import Reveal from "../common/Reveal";
import { surface, surfaceHover } from "../common/CardStyles";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 18px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.article`
  ${surface}
  ${surfaceHover}
  height: 100%;
  padding: 22px;
`;

const GroupHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

const GroupTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Count = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.textDim};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Item = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  font-size: 13.5px;
  color: ${({ theme }) => theme.textMuted};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(255, 255, 255, 0.02);
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.borderStrong};
  }
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

/** Decorative icon; dropped from the tree if the remote SVG fails to load. */
const SkillIcon = ({ src }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Icon src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
  );
};

const Skills = () => (
  <Section
    id="Skills"
    index="02"
    title="Skills"
    description="Core Cloud, DevOps, SRE, Infrastructure as Code, and Software Engineering skills developed across production environments."
  >
    <Grid>
      {skills.map((group, index) => (
        <Reveal key={group.title} delay={(index % 3) * 0.06}>
          <Group>
            <GroupHead>
              <GroupTitle>{group.title}</GroupTitle>
              <Count>{String(group.skills.length).padStart(2, "0")}</Count>
            </GroupHead>
            <List>
              {group.skills.map((item) => (
                <Item key={item.name}>
                  {item.image && <SkillIcon src={item.image} />}
                  {item.name}
                </Item>
              ))}
            </List>
          </Group>
        </Reveal>
      ))}
    </Grid>
  </Section>
);

export default Skills;
