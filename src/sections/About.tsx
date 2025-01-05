/** @jsxImportSource @emotion/react */
import React from 'react';

import { contact } from './styles';

const About: React.FC = () => {
  return (
    <div>
      <p>
        Hey! I'm Jasmine. I'm from Boston, soon to be living in the bay area. I graduated with a B.S. in computer science 
        from Northeastern University in 2024.
        <br/><br/>
        Within the realm of computer science, I'm primarily interested in software development. 
        I value writing scalable and maintainable code, and I enjoy solving interesting problems. 
        <br/><br/>
        When I'm not coding, catch me at a bouldering gym, playing Genshin Impact, or vibing at a rave!
        <br/><br/>
        ❤
      </p>
      <div>
        <a href='mailto:lai.jas@northeastern.edu' target='_blank' rel='noopener noreferrer' css={contact}>
          Contact
        </a>
        <a href='https://linkedin.com/in/jasminelai03/' target='_blank' rel='noopener noreferrer' css={contact}>
          LinkedIn
        </a>
        <a href='https://github.com/jazlai' target='_blank' rel='noopener noreferrer' css={contact}>
          GitHub
        </a>
        <a href='/JasmineLai_Resume.pdf' target='_blank' rel='noopener noreferrer' css={contact}>
          Resume
        </a>
      </div>
    </div>
  );
}

export default About;