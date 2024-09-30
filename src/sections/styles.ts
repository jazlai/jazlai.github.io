import { css } from '@emotion/react'

export const homepage = css({
  a: {
    textDecoration: 'none',
  },
});

export const experienceList = css({
  height: '40vh',
  maxHeight: '100%',
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