/** @jsxImportSource @emotion/react */
import React from 'react';

import { about, contactLinks } from './styles';

const About: React.FC = () => {
  return (
    <div css={about} >
      <p>
        Hey! I'm Jasmine. I'm from Boston, currently living in the bay area. I graduated with a B.S. in computer science 
        from Northeastern University (co2025).
        <br/><br/>
        Within the realm of computer science, I'm primarily interested in software development. 
        I value writing scalable and maintainable code, and I enjoy solving interesting problems. 
        <br/><br/>
        When I'm not coding, catch me at a bouldering gym, playing Genshin Impact, or vibing at a rave!
        <br/><br/>
        ❤
      </p>
      <div css={contactLinks}>
        <a href='mailto:lai.jas@northeastern.edu' target='_blank' rel='noopener noreferrer' >
          Contact
        </a>
        <a href='https://linkedin.com/in/jasminelai03/' target='_blank' rel='noopener noreferrer' >
          LinkedIn
        </a>
        <a href='https://github.com/jazlai' target='_blank' rel='noopener noreferrer' >
          GitHub
        </a>
        <a href='/JasmineLai_Resume.pdf' target='_blank' rel='noopener noreferrer' >
          Resume
        </a>
      </div>
    </div>
  );
}

export default About;