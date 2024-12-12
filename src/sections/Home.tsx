/** @jsxImportSource @emotion/react */
import React from 'react';
import { homepage } from './styles';

const Home: React.FC = () => {
  return (
    <div css={homepage}>
      <p>
        I'm a recent grad from Northeastern University. 
        <br/><br/>
        I'm currently...
          <ul>
            <li>Traveling and spending time with family post grad</li>
          </ul>
        <br/>
        I'm looking forward to...
          <ul>
            <li>Joining Google as a software engineer</li>
          </ul>
      </p>
    </div>
  );
}

export default Home;