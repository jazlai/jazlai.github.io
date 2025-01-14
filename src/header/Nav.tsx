/** @jsxImportSource @emotion/react */
import React from 'react';
import { navBar, navItem } from './styles';
import { useSectionContext } from '../context/SectionProvider';

export interface NavProps {
  sections: string[];
}

const Nav: React.FC<NavProps> = ({ sections }) => {
  const { setActiveSection } = useSectionContext();
  
  return (
    <div css={navBar}>
      {sections.map((section) => {
        const sectionId = section.toLowerCase();
        return(
          <a 
            href='#' 
            css={navItem} 
            onClick={() => setActiveSection(sectionId)} 
          >
            {section}
          </a>
        );
      })}
    </div>
  );
}

export default Nav;