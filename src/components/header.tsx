import React, { useState } from "react";
import styled from "styled-components";

interface HamIsClick {
  readonly isActive: boolean;
}

const Header: React.FunctionComponent = () => {
  const [isHamClick, setIsHamClick] = useState(false);

  const onClick = () => {
    setIsHamClick((ham) => !ham);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoA>Svg Icon</LogoA>
        </Logo>
        <Links>
          <LinksOl>
            <LinksLi>
              <LinksA href="/about">About</LinksA>
            </LinksLi>
            <LinksLi>
              <LinksA href="/stack">Stack</LinksA>
            </LinksLi>
          </LinksOl>
        </Links>
        <HamMenuContainer>
          <HamMenuButton onClick={onClick}>
            <HamMenu>
              <HamBoxInner isActive={isHamClick} />
            </HamMenu>
          </HamMenuButton>
          <HamAside isActive={isHamClick}>
            <AsideNav>
              <AsideNavOl>
                <AsideNavLi>
                  <AsideNavLiA href="/#about">About</AsideNavLiA>
                </AsideNavLi>
                <AsideNavLi>
                  <AsideNavLiA href="/#stack">Stack</AsideNavLiA>
                </AsideNavLi>
              </AsideNavOl>
            </AsideNav>
          </HamAside>
        </HamMenuContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: rgba(10, 25, 47, 0.85);
  width: 100%;
  align-items: center;
  position: fixed;
  height: 10rem;
  top: 0;
  z-index: 11;
  padding: 0 5rem;
  backdrop-filter: blur(1rem);
  transition: ${(props) => props.theme.transition.normal};
  pointer-events: auto;

  ${({ theme }) => theme.media.tabPort} {
    padding: 0 2.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.lightSlate};
  z-index: 12;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoA = styled.a`
  color: ${({ theme }) => theme.green};
`;

// Desktop Links

const Links = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.tabPort} {
    display: none;
  }
`;

const LinksOl = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const LinksLi = styled.li`
  margin: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const LinksA = styled.a`
  padding: 1rem;
  color: inherit;
`;

// Hamburger Menu

const HamMenuContainer = styled.div`
  display: none;

  ${({ theme }) => theme.media.tabPort} {
    display: block;
  }
`;

const HamMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  margin-right: -1.5rem;
  padding: 1.5rem;
  border: 0;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
`;

const HamMenu = styled.div`
  display: inline-block;
  width: 3rem;
  height: 2.4rem;
  position: relative;
`;

const HamBoxInner = styled.div<HamIsClick>`
  position: absolute;
  top: 50%;
  right: 0;
  width: 3rem;
  height: 0.2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.green};
  transition: ${({ isActive }) =>
    isActive
      ? "transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s"
      : "transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s"};
  transform: ${({ isActive }) =>
    isActive ? "rotate(225deg)" : "rotate(0deg)"};

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0;
    height: 0.2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.green};
  }

  &::before {
    width: ${({ isActive }) => (isActive ? "100%" : "120%")};
    top: ${({ isActive }) => (isActive ? "0" : "-1rem")};
    opacity: ${({ isActive }) => (isActive ? "0" : "1")};
  }

  &::after {
    width: ${({ isActive }) => (isActive ? "100%" : "80%")};
    bottom: ${({ isActive }) => (isActive ? "0" : "-1rem")};
    transform: ${({ isActive }) =>
      isActive ? "rotate(-90deg)" : "rotate(0deg)"};
  }
`;

// aside

const HamAside = styled.aside<HamIsClick>`
  display: none;

  ${({ theme }) => theme.media.tabPort} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 5rem 1rem;
    width: min(75vw, 40rem);
    height: 100vh;
    outline: 0;
    background-color: ${({ theme }) => theme.lightNavy};
    box-shadow: -1rem 0 3rem -1.5rem rgba(2, 12, 27, 0.7);
    z-index: 9;
    transform: ${({ isActive }) =>
      isActive ? "translateX(0vw)" : "translateX(100vw)"};
    visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
    transition: ${({ theme }) => theme.transition.normal};
  }
`;

const AsideNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  color: ${({ theme }) => theme.lightSlate};
  text-align: center;
`;

const AsideNavOl = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;

const AsideNavLi = styled.li`
  position: relative;
  font-size: clamp(
    ${({ theme }) => theme.fontSize.sm},
    4vw,
    ${({ theme }) => theme.fontSize.lg}
  );
  margin: 0 auto 0.5rem;

  ${({ theme }) => theme.media.phoneLg} {
    margin: 0 auto 1rem;
  }
`;

const AsideNavLiA = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: ${({ theme }) => theme.transition.normal};
  width: 100%;
  padding: 0.3rem 2rem 2rem;
`;
