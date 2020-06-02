import React from 'react';
import styled from 'styled-components';
// Componentes Presentacionales de vista
const MainStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;
  padding: 1em;
`;

const MainContainer = styled.div`
  display: grid;
  /* 1 fracción side bar, 3 para información */
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
  grid-row-gap: 0.5em;
  /* Resposiveness */
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Main = ({ children }) => (
  // Return implícito
  <MainStyled>
    {/* Contenedor */}
    <MainContainer>
      {children}
    </MainContainer>
  </MainStyled>
);

export default Main;