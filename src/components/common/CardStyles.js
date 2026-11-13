import styled from "styled-components";
import ImageWithFallback from "./ImageWithFallback";

/** Building blocks shared by ProjectCard and CertificationCard. */

export const Card = styled.article`
  width: 330px;
  max-width: 100%;
  min-height: ${({ $minHeight }) => $minHeight || "390px"};
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

export const CardImage = styled(ImageWithFallback)`
  width: 100%;
  height: 180px;
  aspect-ratio: auto;
  font-size: 40px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: ${({ $fit }) => $fit || "cover"};
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + "15"};
  padding: 2px 8px;
  border-radius: 10px;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || "0px"};
  padding: 0 2px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const CardDate = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "80"};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: auto;
`;

export const CardLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;
