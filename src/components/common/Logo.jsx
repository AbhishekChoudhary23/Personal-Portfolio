import React, { useId } from "react";
import styled from "styled-components";

const Root = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Mark = styled.svg`
  display: block;
  flex-shrink: 0;

  /* The node that stands in for the A's crossbar pulses on hover. */
  .node {
    transform-origin: 24px 38px;
    transition: transform 0.25s ease;
  }

  ${Root}:hover & .node,
  a:hover & .node {
    transform: scale(1.35);
  }
`;

const Wordmark = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.015em;
  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.textMuted};
    font-weight: 500;
  }
`;

/**
 * "AC" monogram: the A drawn as a caret with a single node for its crossbar,
 * beside an open C. Same geometry as public/favicon.svg.
 */
const Logo = ({ size = 40, tile = true, wordmark = false, className }) => {
  const gradientId = useId();

  return (
    <Root className={className}>
      <Mark
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="Abhishek Choudhary logo"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="10"
            y1="16"
            x2="58"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#34e3a0" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        {tile && <rect width="64" height="64" rx="14" fill="#0b0f15" />}
        <g
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="5.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 46 24 17 36 46" />
          <path d="M53.71 24.81A12 12 0 1 0 53.71 43.19" />
        </g>
        <circle className="node" cx="24" cy="38" r="3.1" fill="#34e3a0" />
      </Mark>
      {wordmark && (
        <Wordmark>
          Abhishek <span>Choudhary</span>
        </Wordmark>
      )}
    </Root>
  );
};

export default Logo;
