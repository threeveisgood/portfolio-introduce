import React from "react";
import styled from "styled-components";
import Header from "./components/header";

function App() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
