import React from "react";
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

const CertificationCard = ({ certification }) => {
  if (!certification) return null;
  const { image, name, tags, date, link } = certification;

  return (
    <Card>
      <CardImage src={image} alt={name} $fit="contain" />
      {tags?.length > 0 && (
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      )}
      <Details $gap="4px">
        <CardTitle>{name}</CardTitle>
        <CardDate>{date}</CardDate>
      </Details>
      {link && (
        <CardActions>
          <CardLink href={link}>Verify</CardLink>
        </CardActions>
      )}
    </Card>
  );
};

export default CertificationCard;
