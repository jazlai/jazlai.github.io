import { css } from '@emotion/react'

export const homepage = css({
  a: {
    textDecoration: 'none',
    color: '#614fa1',
    fontWeight: '450',
    '&:hover': {
      color: '#473582',
    }
  },
});

export const contact = css({
  marginRight: '10px',
  textDecoration: 'none',
  color: '#614fa1',
  fontWeight: '450',
});

export const experienceList = css({
  paddingTop: '10px',
  marginBottom: '20px',
  listStyleType: 'none',
  overflow: 'auto',

  "@media (max-width: 600px)": {
    marginLeft: '-40px',
  },
});

export const experienceItem = css({
  marginBottom: '30px',
});

export const experienceCompany = css({
  fontSize: '18px',
  fontWeight: '700',
});

export const experiencePosition = css({
  fontSize: '14px',
});

export const experienceDuration = css({
  fontSize: '12px',
  color: '#696969',
});

export const teachingLink = css({
  textDecoration: 'none',
  color: '#696969',
  fontSize: '16px',
  fontWeight: '500',
});