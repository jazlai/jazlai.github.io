import { css } from '@emotion/react';

export const appBackground = css({
  background: 'linear-gradient(to bottom, #f5fbff, #e1eef7, #cae7fc)',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const appContainer = css({
  height: '500px',
  width: '1000px',
  maxHeight: '60vh',
  maxWidth: '60vw',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',

  "@media (max-width: 600px)": {
    maxHeight: '75vh',
    maxWidth: '75vw',
  },
});

export const headerContainer = css({
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '2vw',

  "@media (max-width: 600px)": {
    flexDirection: 'column',
  },
});

export const sectionContainer = css({
  height: '100%',
  maxHeight: '100%',
  padding: '10px',

  "@media (max-width: 600px)": {
    overflow: 'auto',
  },
});

export const contactIcon = css({
  margin: '20px',
  marginTop: '10px',
})
