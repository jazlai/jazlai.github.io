/** @jsxImportSource @emotion/react */
import React from 'react';
import { experienceCompany, experienceDuration, experienceItem, experienceList, experiencePosition } from './styles';

const Teaching: React.FC = () => {
  const experiences = [
    {
      'course': 'CS 4500',
      'position': 'Section Teaching Assistant',
      'duration': '09-2024 — 12-2024',
      'description': 'Reviewed student code walks, graded assignments'
    },
    {
      'course': 'CS 1210',
      'position': 'Teaching Assistant',
      'duration': '09-2023 — 12-2023',
      'description': 'Reviewed resumes, conducted mock interviews'
    },
    {
      'course': 'CS 2500',
      'position': 'Lead Teaching Assistant',
      'duration': '09-2022 — 12-2022',
      'description': 'Led weekly lab, meta-graded assignments, held office hours'
    },
    {
      'course': 'CS 2510',
      'position': 'Teaching Assistant',
      'duration': '05-2022 — 06-2022',
      'description': 'Graded assignments, held office hours'
    },
  ]

  return (
    <div>
      <ul css={experienceList}>
        {experiences.map((experience) => {
          return (
            <li css={experienceItem}>
              <div css={experienceCompany}>{experience.course}</div>
              <div css={experiencePosition}>{experience.position}</div>
              <div css={experienceDuration}>{experience.duration}</div>
              <div css={experiencePosition}>{experience.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Teaching;