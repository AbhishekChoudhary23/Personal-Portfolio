import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImage,
  Tags,
  Tag,
  Details,
  CardTitle,
  CardDate,
  CardActions,
  CardLink,
} from "../common/CardStyles";

const Description = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "99"};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCard = ({ project }) => {
  if (!project) return null;
  const { image, title, tags, date, description, member, github } = project;
  const liveUrl = project.webapp || project.web;

  return (
    <Card $minHeight="490px">
      <CardImage src={image} alt={title} />
      {tags?.length > 0 && (
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      )}
      <Details>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
        <Description title={description}>{description}</Description>
      </Details>
      {member?.length > 0 && (
        <Members>
          {member.map((person, index) => (
            <Avatar
              key={person.name || index}
              src={person.img}
              alt={person.name || "Member"}
            />
          ))}
        </Members>
      )}
      {(github || liveUrl) && (
        <CardActions>
          {github && <CardLink href={github}>View Code</CardLink>}
          {liveUrl && <CardLink href={liveUrl}>Live App</CardLink>}
        </CardActions>
      )}
    </Card>
  );
};

export default ProjectCard;
