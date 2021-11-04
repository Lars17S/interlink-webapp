import React from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const backgroundImage = css({
  width: '100%',
  backgroundImage: `url("https://c.tenor.com/8gGCkmG_slAAAAAd/destiny2-beyond-light.gif")` ,
  backgroundColor: 'black',
  minHeight: 'calc(100vh)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  color: 'white',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',

  
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
  width:'30%',
  
  
});
const blockParagraph = css({
  width: '150%',
  textAlign:'justify',
  
});
const HomepageView: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div css={backgroundImage}>
        <div css={blockValues}>
          <h1>FixWithKors Gaming</h1>
          <p css={blockParagraph}> FixWithKors es una empresa que se enfoca en los amantes del Gaming, podras disfrutar de distintos
            videos relacionados con juegos de Shooters, MOBAs, deportes o RPGs. Disfruta mucho de la aventura.
          </p>
        </div>
      </div>
     </ThemeProvider>
  );
};

export default HomepageView;
