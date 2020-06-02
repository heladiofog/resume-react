import React from 'react';
// Styled library and Provider to manage themes
import styled, { ThemeProvider } from 'styled-components';
// Styles
const SocialStyled = styled.div`
  margin: 0 auto;
  display: block;
`;
const SocialUl = styled.ul`
  list-style-type : none;
  margin: 0;
  padding: 0;
`;
const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`;
const SocialAnchor = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
`;
const SocialIcon = styled.i`
  color: ${props => props.theme.color};
`;
// Themes
const facebook = {
  color: "#3b5998"
};
const twitter = {
  color: "#38A1F3"
};
const linkedin = {
  color: "#0e76a8"
};
const github = {
  color: "#333"
};
const dog = {
  color: "#C2185B"
};

const getColor = name => {
  // console.log(name);
  if (name == 'facebook') return facebook;
  if (name == 'twitter') return twitter;
  if (name == 'linkedin') return linkedin;
  if (name == 'github') return github;
}

const Social = props => (
  <SocialStyled>
    <div className="Social-container">
      {
        props.social &&
        <SocialUl>
          {
            props.social.map((sn, i) => (
              <SocialLi className="Social-item" key={i}>
                <SocialAnchor href={sn.url} target="_blank" rel="noopener noreferrer">
                  {/* {sn.name} */}
                  <ThemeProvider theme={getColor(sn.name)}>
                    <SocialIcon className={`fab fa-${sn.name}`} />
                  </ThemeProvider>
                </SocialAnchor>
              </SocialLi>
            ))
          }
          <SocialLi>
            <ThemeProvider theme={dog}>
              <SocialIcon className={`fas fa-dog`} />
            </ThemeProvider>
          </SocialLi>
        </SocialUl>
      }
    </div>
  </SocialStyled>
);

export default Social;