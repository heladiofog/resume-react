import React from 'react';
import Social from './Social';
import styled from 'styled-components';
// Styles
const AboutStyle = styled.div`
  text-align: center;
`;
const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;
const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  border: 2px solid #E91E63;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;
const AboutName = styled.div`
  text-align: center;
`;
const AboutH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
  color: #C2185B;
`;
const AboutProfession = styled.p`
  color: #C2185B;
  font-weight: 300;
  letter-spacing: 1.6px;
  margin: .2em 0 1em 0;
`;
const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;
const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 400;
`;
// Assets
const profileImg = 'https://assets.nacionrex.com/__export/1527202676326/sites/debate/img/2018/05/24/solo-chewbacca-main_80768fa8.jpeg_1577178466.jpeg';

const About = ({ name, bio, avatar, profession, social, address }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          {/* https://assets.nacionrex.com/__export/1527202676326/sites/debate/img/2018/05/24/solo-chewbacca-main_80768fa8.jpeg_1577178466.jpeg */}
          <AboutImg src={profileImg} alt={name} />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{name}</AboutH2>
        {/* <AboutH2>Heladio Arteaga Franco</AboutH2> */}
      </AboutName>
    </div>
    <div className="about-profession">
      {/* <p>Fullstack developer at Tezca</p> */}
      <AboutProfession>{profession}</AboutProfession>
    </div>
    <div className="About-description">
      {/* <p>Software Engineer that enjoys running.</p> */}
      <AboutBio>{bio}</AboutBio>
    </div>
    <div className="About-location">
      {/* <p>Ciudad de México</p> */}
      <AboutLocation>{address}</AboutLocation>
    </div>
    <div className="About-social">
      {/* {social} */}
    <Social 
      social={social}
    />
    </div>
  </AboutStyle>
);

export default About;