import * as React from "react";
import styled from "styled-components";

const Footer: React.FunctionComponent = (props) => {
  return (
    <>
      <FooterContainer></FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 70px;
  height: auto;
  text-align: center;
`;
