import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Bio, navLinks } from "../../data";
import { CloseRounded, MenuRounded } from "@mui/icons-material";
import Logo from "../../assets/images/Abhishek Logo_copy.jpeg";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled.a`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 1024px) {
    gap: 16px;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
  }
`;

const MobileIcon = styled.button`
  height: 100%;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  background: none;
  border: none;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  list-style: none;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + "99"};
  position: absolute;
  top: 80px;
  right: 0;
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0.3s;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-16px)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  z-index: 1000;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 200px;
  max-width: 100%;
  height: 60px;
  border-radius: 30px;
  object-fit: cover;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const closeMenu = () => setIsOpen(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="#About" aria-label="Back to top">
          <Img src={Logo} alt={`${Bio.name} Logo`} />
        </NavLogo>

        <MobileIcon
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseRounded /> : <MenuRounded />}
        </MobileIcon>

        <NavItems>
          {navLinks.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </NavItems>

        <ButtonContainer>
          <GithubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </GithubButton>
        </ButtonContainer>

        <MobileMenu $isOpen={isOpen} aria-hidden={!isOpen}>
          {navLinks.map((item) => (
            <li key={item.href}>
              <NavLink onClick={closeMenu} href={item.href}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <GithubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            style={{ background: theme.primary, color: theme.bg }}
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
