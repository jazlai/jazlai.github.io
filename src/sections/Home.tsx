/** @jsxImportSource @emotion/react */
import React from 'react';
import { homepage } from './styles';

const Home: React.FC = () => {
  return (
    <div css={homepage}>
      <p>
        I'm a fourth-year student at Northeastern University studying computer science. 
        <br/><br/>
        I'm currently...
          <ul>
            <li>Finishing my last undergraduate semester in Boston</li>
            <li>TAing for <a href="https://felleisen.org/matthias/4500-f24/" target='_blank' rel='noopener noreferrer'>Software Development</a></li>
          </ul>
        <br/>
        I'm looking forward to...
          <ul>
            <li>Graduating in fall 2024!</li>
            <li>Working at Google as a full time software engineer</li>
          </ul>
      </p>
    </div>
  );
}

export default Home;