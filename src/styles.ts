import { css } from '@emotion/react';

export const appBackground = css({
  background: 'F4F3F2',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const appContainer = css({
  maxWidth: '500px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  marginTop: '30px',
  //backgroundColor: 'aqua',

  "@media (max-width: 700px)": {
    maxWidth: '70vw',
  },

  "@media (max-width: 500px)": {
    maxWidth: '80vw',
  },
});

export const sectionContainer = css({
  display: 'flex',
  padding: '10px',
  //backgroundColor: 'green',

  "@media (max-width: 700px)": {
    paddingLeft: '0px',
  },
});
