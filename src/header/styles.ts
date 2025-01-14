import { css } from '@emotion/react';

export const headerContainer = css({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'flex-start',
  gap: '24px',
  marginTop: '20px',
  marginRight: '0px',
  //backgroundColor: 'purple',

  "@media (max-width: 700px)": {
    flexDirection: 'column',
    gap: '10px',
  },
});

export const headerName = css({
  fontSize: '40px',
  fontWeight: '500',

  "@media (max-width: 700px)": {
    fontSize: '35px',
  },
});

export const navBar = css({
  marginTop: 'auto',
  paddingBottom: '4px',
});

export const navItem = css({
  margin: '10px',
  color: '#000000',
  fontSize: '20px',
  fontWeight: '500',
  textDecoration: 'none',

  "@media (max-width: 700px)": {
    marginLeft: 0,
  },

  "@media (max-width: 500px)": {
    fontSize: '18px',
    marginLeft: 0,
  },
});