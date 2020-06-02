import React from 'react';
import { createGlobalStyle } from 'styled-components';
// Components
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
// Hooks
import useGetData from '../hooks/useGetData';
// Styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const App = () => {
  const data = useGetData();
  console.log(data);
  
  return data.length === 0 ? <h3>Cargando...</h3> : (
    <Main>
      <GlobalStyle />
      <Sidebar>
        {/*  */}
        <About
          name={data.name}
          avatar={data.avatar}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
        />
      </Sidebar>
      <Info>
        {/*  */}
        <Education
          data={data.education}
        />
        <Experience
          data={data.experience}
        />
        <Certificates
          data={data.certificate}
        />
        <Skills
          data={data.skills}
        />
      </Info>
    </Main>
  );
}

export default App;