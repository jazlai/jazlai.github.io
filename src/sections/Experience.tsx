/** @jsxImportSource @emotion/react */
import React from 'react';
import { experienceCompany, experienceDuration, experienceItem, experienceList, experiencePosition, teachingLink } from './styles';
import { useSectionContext } from '../context/SectionProvider';

const Experience: React.FC = () => {
  const { setActiveSection } = useSectionContext();
  const experiences = [
    {
      'company': 'Snap Inc',
      'position': 'Software Engineer Intern',
      'duration': '05-2024 — 08-2024',
    },
    {
      'company': 'Google',
      'position': 'STEP Intern',
      'duration': '06-2023 — 09-2023',
    },
    {
      'company': 'Akamai Technologies',
      'position': 'SDET Intern',
      'duration': '01-2023 — 06-2023',
    },
  ]

  return (
    <div>
      <ul css={experienceList}>
        {experiences.map((experience) => {
          return (
            <li css={experienceItem}>
              <div css={experienceCompany}>{experience.company}</div>
              <div css={experiencePosition}>{experience.position}</div>
              <div css={experienceDuration}>{experience.duration}</div>
            </li>
          );
        })}
        <a 
          href='#' 
          css={teachingLink} 
          onClick={() => setActiveSection('teaching')} 
        >
          → teaching experience
        </a>
      </ul>
    </div>
  );
}

export default Experience;