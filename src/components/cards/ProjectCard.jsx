import React from "react";
import styled from "styled-components";
import { ArrowOutward, GitHub } from "@mui/icons-material";
import ImageWithFallback from "../common/ImageWithFallback";
import {
  Card,
  Tags,
  Tag,
  CardTitle,
  Meta,
  CardActions,
  CardLink,
} from "../common/CardStyles";

const Media = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Image = styled(ImageWithFallback)`
  width: 100%;
  height: 100%;
  font-size: 40px;
  /* Logos and vector art must not be cropped; screenshots fill the frame. */
  object-fit: ${({ $contain }) => ($contain ? "contain" : "cover")};
  padding: ${({ $contain }) => ($contain ? "18px" : "0")};
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

const Category = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.text};
  background: rgba(6, 8, 12, 0.78);
  border: 1px solid ${({ theme }) => theme.borderStrong};
  border-radius: ${({ theme }) => theme.radius.pill};
  backdrop-filter: blur(6px);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  padding: 20px 22px 22px;
`;

const Description = styled.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: ${({ theme }) => theme.textMuted};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.bgElevated};
`;

const isVector = (url = "") => /\.svg($|\?)/i.test(url);

const ProjectCard = ({ project }) => {
  if (!project) return null;
  const { image, title, tags, date, description, member, github, category } =
    project;
  const liveUrl = project.webapp || project.web;

  return (
    <Card>
      <Media>
        <Image src={image} alt={title} $contain={isVector(image)} />
        {category && <Category>{category}</Category>}
      </Media>
      <Body>
        <div>
          <CardTitle>{title}</CardTitle>
          <Meta style={{ marginTop: 4 }}>{date}</Meta>
        </div>
        <Description title={description}>{description}</Description>
        {tags?.length > 0 && (
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        )}
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
            {github && (
              <CardLink href={github}>
                <GitHub /> View Code
              </CardLink>
            )}
            {liveUrl && (
              <CardLink href={liveUrl}>
                Live App <ArrowOutward />
              </CardLink>
            )}
          </CardActions>
        )}
      </Body>
    </Card>
  );
};

export default ProjectCard;
