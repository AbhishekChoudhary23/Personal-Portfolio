import React, { useId } from "react";
import styled, { keyframes } from "styled-components";

const trace = keyframes`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
`;

const Root = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Mark = styled.svg`
  display: block;
  flex-shrink: 0;

  .pulse {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
  }

  /* Hover replays the monitor trace and blinks the status light. */
  ${Root}:hover & .pulse {
    animation: ${trace} 0.9s ease-out;
  }

  ${Root}:hover & .status {
    animation: ${blink} 0.9s ease-in-out;
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
 * Monogram built from the tools of the job: a container hexagon left open on
 * the right so it reads as "C", an uptime trace inside it that spikes into an
 * "A", and a status light where the trace leaves the frame.
 * Same geometry as public/favicon.svg.
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
            x1="12"
            y1="50"
            x2="52"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#34e3a0" />
          </linearGradient>
        </defs>
        {tile && <rect width="64" height="64" rx="14" fill="#0b0f15" />}
        <g
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            strokeWidth="4.4"
            d="M51.5 20.75 32 9.5 12.5 20.75v22.5L32 54.5l19.5-11.25"
          />
          <path
            className="pulse"
            pathLength="1"
            strokeWidth="3.8"
            d="M19 37h5.5L31 20l6.5 25L41 37h6"
          />
        </g>
        <circle className="status" cx="55" cy="37" r="3.2" fill="#34e3a0" />
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
