import * as React from "react";
import styled from "styled-components";
import AboutMe from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";

const Main: React.FunctionComponent = () => {
  return (
    <div>
      <MainContainer>
        <MainSection>
          <div>
            <SectionHello>안녕하세요, 제 이름은</SectionHello>
          </div>
          <div>
            <h2 className="big-heading">최종휘입니다.</h2>
          </div>
          <div>
            <SectionDescription>
              프론트엔드 개발자를 꿈꾸고 있으며, 새로운 라이브러리와
              프레임워크를 접하는 것을 좋아합니다.
            </SectionDescription>
          </div>
          <div>
            <SectionGitLink
              href="https://github.com/threeveisgood?tab=repositories"
              target="_blank"
            >
              Check out my github
            </SectionGitLink>
          </div>
        </MainSection>
        <AboutMe />
        <Skills />
      </MainContainer>
    </div>
  );
};

export default Main;

const MainContainer = styled.main`
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0px 15rem;

  ${({ theme }) => theme.media.tabLand} {
    padding: 0px 10rem;
  }

  ${({ theme }) => theme.media.tabPort} {
    padding: 0px 5rem;
  }

  ${({ theme }) => theme.media.phone} {
    padding: 0px 2.5rem;
  }
`;

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;
`;

const SectionHello = styled.h1`
  margin: 0px 0px 3rem 0.4rem;
  font-size: clamp(
    ${({ theme }) => theme.fontSize.sm},
    5vw,
    ${({ theme }) => theme.fontSize.md}
  );
  color: ${({ theme }) => theme.green};
  font-weight: 400;

  ${({ theme }) => theme.media.phone} {
    margin: 0px 0px 2rem 0.2rem;
  }
`;

const SectionDescription = styled.p`
  margin: 2rem 0px 0px;
  max-width: 540px;
`;

const SectionGitLink = styled.a`
  color: ${({ theme }) => theme.green};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.green};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem 2.8rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.normal};
  margin-top: 5rem;
`;
