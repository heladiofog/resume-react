import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = props => (
  <div className="Experience">
    <div className="Experience-container">
      <H2Styled>Experience</H2Styled>
      <div className="Experience-item">
        <H3Styled>
          CTO - Fyya,
          <span> Jan 2019 - Current</span>
        </H3Styled>
        <PStyled text={'10 years developing software'} />
      </div>
    </div>
    {
      props.data && props.data.map((experience, i) => (
        <div className="Experience-item" key={i}>
          <H3Styled>
            {`${experience.jobTitle} - ${experience.company}`},
            <span> {experience.startDate} - {experience.endDate}</span>
          </H3Styled>
          <PStyled text={experience.jobDescription} />
        </div>
      ))
    }
  </div>
);

export default Experience;