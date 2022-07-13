import * as React from "react";
import styled from "styled-components";

const Skills: React.FunctionComponent = () => {
  return (
    <>
      <section>
        <h2 className="heading">Skills</h2>
        <ImgContainer>
          <p className="heading">프론트엔드</p>
          <Img src="/skills/frontend.png" />
        </ImgContainer>
      </section>
    </>
  );
};

export default Skills;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

const Img = styled.img`
  display: flex;
  max-width: 100%;
  border-radius: 1.5rem;
`;
