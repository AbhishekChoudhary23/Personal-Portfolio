import styled, { css } from "styled-components";

/** Glass surface shared by every card on the page. */
export const surface = css`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  backdrop-filter: blur(6px);
  transition: border-color 0.25s ease, background 0.25s ease,
    transform 0.25s ease, box-shadow 0.25s ease;
`;

export const surfaceHover = css`
  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.primaryGlow};
    box-shadow: 0 18px 50px -24px ${({ theme }) => theme.primaryGlow};
  }
`;

export const Card = styled.article`
  ${surface}
  ${surfaceHover}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Tag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11.5px;
  line-height: 1.5;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primarySoft};
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.radius.pill};
  white-space: nowrap;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 19px;
  line-height: 1.3;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const Meta = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.textDim};
`;

export const CardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: auto;
  padding-top: 6px;
`;

export const CardLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  svg {
    font-size: 16px;
    transition: transform 0.2s ease;
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &:hover svg {
    transform: translate(2px, -2px);
  }
`;
