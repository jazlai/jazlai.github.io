import { css } from '@emotion/react'

const linkProps = {
  textDecoration: 'none',
  color: '#614fa1',
  fontWeight: '450',
  '&:hover': {
    color: '#473582',
  }
}

export const homepage = css({
  a: {
    ...linkProps
  },
});

export const about = css({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '5px',

  "@media (max-width: 700px)": {
    paddingLeft: '0px',
  },
});

export const contactLinks = css({
  a: {
    marginRight: '10px',
    ...linkProps
  },
});

export const experienceList = css({
  paddingTop: '10px',
  marginBottom: '20px',
  listStyleType: 'none',
  overflow: 'auto',

  "@media (max-width: 700px)": {
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