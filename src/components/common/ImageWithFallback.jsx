import React, { useState } from "react";
import styled from "styled-components";

const Fallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.primary + "20"};
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-transform: uppercase;
`;

const getInitials = (text = "") =>
  text
    .split(/\s+/)
    .filter((word) => /^[a-z0-9]/i.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

/**
 * <img> that swaps to an initials badge when the source is missing or fails
 * to load. Most logos here are hot-linked from third-party hosts, so a dead
 * URL must not leave a broken-image icon on the page.
 */
const ImageWithFallback = ({ src, alt = "", className, style, ...rest }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <Fallback className={className} style={style} role="img" aria-label={alt}>
        {getInitials(alt)}
      </Fallback>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
};

export default ImageWithFallback;
