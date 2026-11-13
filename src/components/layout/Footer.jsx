import React from "react";
import styled from "styled-components";
import { Bio, navLinks } from "../../data";
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";

import gfg from "../../assets/images/gfg.svg";
import lc from "../../assets/images/leetcode.svg";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  list-style: none;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Img = styled.img`
  width: 2rem;
  height: 31px;
  display: inline-block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Footer = () => {
  const gfgUrl = Bio.geeks || Bio.gfg;

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{Bio.name}</Logo>
        <Nav>
          {navLinks.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookRounded />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <Img src={lc} alt="LeetCode" />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={gfgUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GeeksforGeeks"
          >
            <Img src={gfg} alt="GeeksforGeeks" />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
