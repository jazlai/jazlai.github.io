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
  width: '570px',
  maxWidth: '570px',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  paddingTop: '0px',
  marginTop: '30px',

  "@media (max-width: 600px)": {
    maxWidth: '70vw',
  },
});

export const headerContainer = css({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'flex-start',
  gap: '2vw',
  marginTop: '3vw',

  "@media (max-width: 700px)": {
    flexDirection: 'column',
  },
});

export const sectionContainer = css({
  maxWidth: '550px',
  padding: '10px',

  "@media (max-width: 600px)": {
    overflow: 'auto',
  },
});
