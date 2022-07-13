import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./Main";

function App() {
  return (
    <MainContainer>
      <Header />
      <Main />
      <Footer />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
