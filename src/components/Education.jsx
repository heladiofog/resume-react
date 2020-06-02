import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
/**
 * Displays education section information
 * @param {Array} props Array of Education items
 */
const Education = props => (
  <div className="Education">
    <div className="Edication-container">
      <H2Styled>Education</H2Styled>
      <div className="Education-item">
        <H3Styled>Computer Engineer B. A. - UAM</H3Styled>
        <PStyled text="Computer Engineer B. A. dsnaknlnlkdnsdP" />
      </div>
      {
        props.data && props.data.map((ei, i) => (
          <div className="Education-item" key={i}>
            <H3Styled>
              {ei.degree} {ei.institution}
              <span> {ei.startDate} - {ei.endDate}</span>
            </H3Styled>
            <PStyled text={ei.description} />
          </div>
        ))
      }
    </div>
  </div>
);

export default Education;