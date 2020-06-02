import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
  <div className="Certificates">
    <div className="Certificates-container">
      <H2Styled>Certifications</H2Styled>
      <div className="Certificate-item">
        <H3Styled>Scrum Master - SCRUM Study<span>, May 2020</span></H3Styled>
        <H3Styled>Product Owner - SCRUM Study<span>, May 2020</span></H3Styled>
      </div>
      {
        props.data && props.data.map((cert, i) => (
          <div className="Certificate-item" key={i}>
            <H3Styled>
              {`${cert.name} - ${cert.institution}, `}
              <span>{cert.date}</span>
            </H3Styled>
            <PStyled text={cert.description} />
          </div>
        ))
      }
    </div>
  </div>
);

export default Certificates;