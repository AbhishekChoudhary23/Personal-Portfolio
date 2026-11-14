import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CloseRounded, GitHub, MenuRounded } from "@mui/icons-material";
import { Bio, navLinks } from "../../data";
import useActiveSection from "../../hooks/useActiveSection";
import Logo from "../common/Logo";

const SECTION_IDS = navLinks.map((item) => item.href.slice(1));
const MOBILE = "900px";

const Header = styled.header`
  position: fixed;
  top: 14px;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 16px;
  pointer-events: none;
`;

const Bar = styled.nav`
  pointer-events: auto;
  position: relative;
  max-width: 1120px;
  height: 60px;
  margin: 0 auto;
  padding: 0 10px 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid
    ${({ theme, $scrolled }) => ($scrolled ? theme.borderStrong : theme.border)};
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(8, 11, 16, 0.78)" : "rgba(8, 11, 16, 0.45)"};
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 12px 40px -18px rgba(0, 0, 0, 0.9)" : "none"};
  transition: background 0.3s ease, border-color 0.3s ease,
    box-shadow 0.3s ease;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding-left: 2px;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.pill};

  /* Mark only once the links need the room; the name returns on mobile. */
  @media (min-width: 901px) and (max-width: 1080px) {
    span > span {
      display: none;
    }
  }
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
  list-style: none;

  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

const NavLink = styled.a`
  display: block;
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme, $active }) => ($active ? theme.text : theme.textMuted)};
  background: ${({ theme, $active }) =>
    $active ? theme.surfaceHover : "transparent"};
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderStrong};
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;

  svg {
    font-size: 18px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primarySoft};
  }
`;

const DesktopOnly = styled.div`
  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  @media (max-width: ${MOBILE}) {
    display: inline-flex;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: ${MOBILE}) {
    display: block;
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    padding: 14px;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.borderStrong};
    background: #0b0f15;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.9);
    transform-origin: top;
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.98)"};
  }
`;

const MobileLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 12px;

  a {
    padding: 11px 14px;
    font-size: 16px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const renderLinks = (onClick) =>
    navLinks.map((item) => {
      const isActive = activeId === item.href.slice(1);
      return (
        <li key={item.href}>
          <NavLink
            href={item.href}
            onClick={onClick}
            $active={isActive}
            aria-current={isActive ? "true" : undefined}
          >
            {item.label}
          </NavLink>
        </li>
      );
    });

  const githubButton = (
    <GithubButton
      href={Bio.github}
      target="_blank"
      rel="noopener noreferrer"
      onClick={closeMenu}
    >
      <GitHub /> Github Profile
    </GithubButton>
  );

  return (
    <Header>
      <Bar $scrolled={scrolled || isOpen} aria-label="Primary">
        <LogoLink href="#About" aria-label="Back to top" onClick={closeMenu}>
          <Logo size={42} wordmark />
        </LogoLink>

        <Links>{renderLinks()}</Links>

        <DesktopOnly>{githubButton}</DesktopOnly>

        <MenuButton
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseRounded /> : <MenuRounded />}
        </MenuButton>

        <MobileMenu $isOpen={isOpen} aria-hidden={!isOpen}>
          <MobileLinks>{renderLinks(closeMenu)}</MobileLinks>
          {githubButton}
        </MobileMenu>
      </Bar>
    </Header>
  );
};

export default Navbar;
