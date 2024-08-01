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
  //background: 'white',
  padding: '20px',
});

export const headerContainer = css({
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '2vw',
});

export const sectionContainer = css({
  padding: '10px',
});
