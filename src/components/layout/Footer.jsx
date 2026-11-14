import React from "react";
import styled from "styled-components";
import {
  FacebookRounded,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Bio, navLinks } from "../../data";
import gfgIcon from "../../assets/images/gfg.svg";
import leetcodeIcon from "../../assets/images/leetcode.svg";
import Logo from "../common/Logo";

const FooterRoot = styled.footer`
  position: relative;
  z-index: 1;
  padding: 40px 24px 32px;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px 22px;
`;

const NavLink = styled.a`
  font-size: 14.5px;
  color: ${({ theme }) => theme.textMuted};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  color: ${({ theme }) => theme.textDim};
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${({ theme }) => theme.textMuted};
  border: 1px solid ${({ theme }) => theme.border};
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease,
    transform 0.2s ease;

  svg {
    font-size: 20px;
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primarySoft};
    transform: translateY(-2px);
  }
`;

export const socialLinks = [
  { label: "GitHub", href: Bio.github, icon: <GitHub /> },
  { label: "LinkedIn", href: Bio.linkedin, icon: <LinkedIn /> },
  {
    label: "LeetCode",
    href: Bio.leetcode,
    icon: <img src={leetcodeIcon} alt="" />,
  },
  {
    label: "GeeksforGeeks",
    href: Bio.geeks || Bio.gfg,
    icon: <img src={gfgIcon} alt="" />,
  },
  { label: "Instagram", href: Bio.insta, icon: <Instagram /> },
  { label: "Facebook", href: Bio.facebook, icon: <FacebookRounded /> },
].filter((link) => link.href);

export const SocialLinks = () => (
  <Socials>
    {socialLinks.map(({ label, href, icon }) => (
      <SocialLink
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
      >
        {icon}
      </SocialLink>
    ))}
  </Socials>
);

const Footer = () => (
  <FooterRoot>
    <Inner>
      <Top>
        <Logo size={38} wordmark />
        <Nav>
          {navLinks.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </Nav>
      </Top>
      <Bottom>
        <Copyright>
          &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
        </Copyright>
        <SocialLinks />
      </Bottom>
    </Inner>
  </FooterRoot>
);

export default Footer;
