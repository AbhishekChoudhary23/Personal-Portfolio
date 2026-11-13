import React from "react";
import styled from "styled-components";
import { ArrowOutward, VerifiedOutlined } from "@mui/icons-material";
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

const Layout = styled(Card)`
  flex-direction: row;
  align-items: center;
  gap: 22px;
  padding: 22px;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Badge = styled(ImageWithFallback)`
  width: 112px;
  height: 112px;
  flex-shrink: 0;
  object-fit: contain;
  font-size: 28px;
  border-radius: ${({ theme }) => theme.radius.md};
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.5));
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  align-self: stretch;
`;

const CertificationCard = ({ certification }) => {
  if (!certification) return null;
  const { image, name, tags, date, link } = certification;

  return (
    <Layout>
      <Badge src={image} alt={`${name} badge`} label={name} />
      <Body>
        <CardTitle>{name}</CardTitle>
        <Meta>{date}</Meta>
        {tags?.length > 0 && (
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        )}
        {link && (
          <CardActions>
            <CardLink href={link}>
              <VerifiedOutlined /> Verify <ArrowOutward />
            </CardLink>
          </CardActions>
        )}
      </Body>
    </Layout>
  );
};

export default CertificationCard;
