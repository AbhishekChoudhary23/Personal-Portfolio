import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories } from "../../data";
import ProjectCard from "../cards/ProjectCard";
import Section from "../common/SectionLayout";

const Filters = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 5px;
  margin-bottom: 28px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.surface};

  @media (max-width: 520px) {
    border-radius: ${({ theme }) => theme.radius.lg};
  }
`;

const Filter = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 13.5px;
  font-weight: 500;
  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  color: ${({ theme, $active }) => ($active ? theme.onPrimary : theme.textMuted)};
  background: ${({ theme, $active }) =>
    $active ? theme.gradient : "transparent"};
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme, $active }) => ($active ? theme.onPrimary : theme.text)};
  }

  @media (max-width: 520px) {
    padding: 7px 12px;
    font-size: 12.5px;
  }
`;

const FilterCount = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  opacity: 0.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 20px;
`;

const countFor = (value) =>
  value === "all"
    ? projects.length
    : projects.filter((item) => item.category === value).length;

const Projects = () => {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((item) => item.category === active),
    [active]
  );

  return (
    <Section
      id="Projects"
      index="04"
      title="Projects"
      description="Production-grade DevOps, GitOps, Cloud Infrastructure, and Full-Stack web engineering projects."
    >
      <Filters role="group" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <Filter
            key={category.value}
            type="button"
            aria-pressed={active === category.value}
            $active={active === category.value}
            onClick={() => setActive(category.value)}
          >
            {category.label}
            <FilterCount>{countFor(category.value)}</FilterCount>
          </Filter>
        ))}
      </Filters>

      <Grid>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Grid>
    </Section>
  );
};

export default Projects;
