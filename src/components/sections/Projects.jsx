import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { projects, projectCategories } from "../../data";
import ProjectCard from "../cards/ProjectCard";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.button`
  padding: 8px 18px;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + "20"};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
  }
  ${({ $active, theme }) =>
    $active &&
    `
    background: ${theme.primary + "20"};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const filteredProjects = useMemo(() => {
    if (toggle === "all") return projects;
    return projects.filter((item) => item.category === toggle);
  }, [toggle]);

  return (
    <SectionContainer id="Projects">
      <SectionWrapper>
        <SectionTitle>Projects</SectionTitle>
        <SectionDesc>
          Production-grade DevOps, GitOps, Cloud Infrastructure, and Full-Stack
          web engineering projects.
        </SectionDesc>

        <ToggleButtonGroup role="group" aria-label="Filter projects">
          {projectCategories.map((cat, idx) => (
            <React.Fragment key={cat.value}>
              {idx > 0 && <Divider />}
              <ToggleButton
                type="button"
                aria-pressed={toggle === cat.value}
                $active={toggle === cat.value}
                onClick={() => setToggle(cat.value)}
              >
                {cat.label}
              </ToggleButton>
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Projects;
