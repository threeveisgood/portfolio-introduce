import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import Main from "./Main";

function App() {
  return (
    <MainContainer>
      <Header />
      <Main />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
