/** @jsxImportSource @emotion/react */
import React from 'react';

import { appBackground, appContainer, sectionContainer } from './styles';
import { useSectionContext } from './context/SectionProvider';

import Header from './header/Header';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Teaching from './sections/Teaching';

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
        <Header sections={tabs} />
        <div css={sectionContainer}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default App;
