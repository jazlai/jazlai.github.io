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
            <li>Play-ing at Google</li>
            <li>Embracing my identity as a bay area transplant</li>
          </ul>
        <br/>
        I'm looking forward to...
          <ul>
            <li>Next snowboarding season</li>
          </ul>
      </p>
    </div>
  );
}

export default Home;