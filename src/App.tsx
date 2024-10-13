/** @jsxImportSource @emotion/react */
import React from 'react';

import { appBackground, appContainer, contactIcon, headerContainer, sectionContainer } from './styles';
import { useSectionContext } from './context/SectionProvider';

import Name from './header/Name';
import Nav from './header/Nav';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Teaching from './sections/Teaching';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

const App: React.FC = () => {
  const { activeSection } = useSectionContext();
  const tabs = ['Home', 'About', 'Experience'];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'teaching':
        return <Teaching />;
    }
  }

  return (
    <div css={appBackground}>
      <div css={appContainer}>
        <div css={headerContainer}>
          <Name />
          <Nav 
            sections={tabs}
          />
        </div>
        <div css={sectionContainer}>
          {renderSection()}
        </div>
      </div>
      <div>
        <a href='mailto:lai.jas@northeastern.edu' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
          <FontAwesomeIcon icon={faEnvelope} css={contactIcon} />
        </a>
        <a href='https://linkedin.com/in/jasminelai03/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
          <FontAwesomeIcon icon={faLinkedin} css={contactIcon} />
        </a>
        <a href='https://github.com/jasmine-lai' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
          <FontAwesomeIcon icon={faGithub} css={contactIcon}  />
        </a>
        <a href='/Jasmine_Lai_Resume.pdf' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
          <FontAwesomeIcon icon={faFile} css={contactIcon} />
        </a>
     </div>
    </div>
  );
}

export default App;
