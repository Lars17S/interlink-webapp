import React from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const breakpoints = [830, 1200, 1500];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const backgroundImage = css({
  width: '100%',
  backgroundImage: `url("https://c.tenor.com/8gGCkmG_slAAAAAd/destiny2-beyond-light.gif")`,
  backgroundColor: 'black',
  minHeight: 'calc(100vh)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  color: 'white',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  [mq[0]]: {
    //responsive smallest
    alignItems: 'start',
    backgroundImage: 'none',
  },
  [mq[1]]: {
    //responsive middle size
    alignItems: 'start',
    backgroundPosition: 'top center',
    maxHeight: 'calc(90vh)',
  },
});
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#121212',
    },
  },
});

const blockValues = css({
  width: '30%',
  lineHeight: '4.5em',
  fontSize: '2.5em',
  paddingBottom: '4em',
  [mq[0]]: {
    //responsive smallest
    paddingBottom: '2em',
    fontSize: '1em',
    lineHeight: '1.2em',
    marginTop: '0.5em',
  },
  [mq[1]]: {
    //responsive middle size
    marginTop: '5em',
    paddingBottom: '2em',
    fontSize: '2em',
    lineHeight: '1.2em',
  },
});
const blockParagraph = css({
  width: '150%',
  textAlign: 'justify',
  lineHeight: '1em',
  fontSize: '0.4em',
  [mq[0]]: {
    //responsive smallest
  },
  [mq[1]]: {
    //responsive middle size
  },
});

const titleBlock = css({
  width: '120%',
  [mq[0]]: {
    //responsive smallest
  },
  [mq[1]]: {
    //responsive middle size
  },
});

const HomepageView: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div css={backgroundImage}>
        <div css={blockValues}>
          <h1 css={titleBlock}>FixWithKors Gaming</h1>
          <p css={blockParagraph}>
            {' '}
            FixWithKors es una empresa que se enfoca en los amantes del Gaming,
            podras disfrutar de distintos videos relacionados con juegos de
            Shooters, MOBAs, deportes o RPGs. Disfruta mucho de la aventura.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomepageView;
