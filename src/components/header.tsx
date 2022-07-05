import * as React from "react";
import styled from "styled-components";

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoA>Svg Icon</LogoA>
        </Logo>
        <Links>
          <Ol>
            <Li>
              <A href="/about">About</A>
            </Li>
            <Li>
              <A href="/stack">Stack</A>
            </Li>
          </Ol>
        </Links>
        <HamMenuContainer>
          <HamMenuButton>
            <HamMenu>
              <HamBoxInner />
            </HamMenu>
          </HamMenuButton>
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
  height: 100px;
  top: 0px;
  z-index: 11;
  padding: 0 5rem;
  backdrop-filter: blur(10px);
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

const Ol = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

const Li = styled.li`
  margin: 0px 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const A = styled.a`
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
  border: 0px;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
`;

const HamMenu = styled.div`
  display: inline-block;
  width: 30px;
  height: 24px;
  position: relative;
`;

const HamBoxInner = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  width: 30px;
  height: 2px;
  border-radius: ${({ theme }) => theme.boderRadius};
  background-color: ${({ theme }) => theme.green};
  transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
  transform: rotate(0deg);

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 2px;
    border-radius: ${({ theme }) => theme.boderRadius};
    background-color: ${({ theme }) => theme.green};
  }

  &::before {
    width: 120%;
    top: -1rem;
    opacity: 1;
  }

  &::after {
    width: 80%;
    bottom: -1rem;
    transform: rotate(0deg);
  }
`;
