import React, { ReactNode, createContext, useState } from 'react';

interface SectionContextType {
  activeSection: string;
  setActiveSection: (tab: string) => void;
}

const defaultContext: SectionContextType = {
  activeSection: 'home',
  setActiveSection: () => {}
};

const SectionContext = createContext<SectionContextType>(defaultContext);

export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => React.useContext(SectionContext);