import { css } from '@emotion/react';

export const headerName = css({
  fontSize: '50px',
  fontWeight: '500',

  "@media (max-width: 700px)": {
    fontSize: '40px',
  },

  "@media (maxWidth: 1000px)": {
    fontSize: '50px',
  },
});

export const navBar = css({
  marginTop: 'auto',
  paddingBottom:  '8px',
});

export const navItem = css({
  margin: '10px',
  color: '#000000',
  fontSize: '20px',
  fontWeight: '500',
  textDecoration: 'none',

  "@media (max-width: 600px)": {
    fontSize: '16px',
    marginLeft: 0,
  },
});