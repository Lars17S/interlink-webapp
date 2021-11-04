import React from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const backgroundImage = css({
  width: '100%',
  backgroundImage: `url("https://c.tenor.com/8gGCkmG_slAAAAAd/destiny2-beyond-light.gif")` ,
  backgroundColor: 'black',
  minHeight: 'calc(100vh - 96px)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '95% 95%',
  color: 'white',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  
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
    <div css={backgroundImage}>
      <div css={blockValues}>
        <h1>FixWithKors Gaming</h1>
        <p css={blockParagraph}> FixWithKors es una empresa que se enfoca en los amantes del Gaming, podras disfrutar de distintos
          videos relacionados con juegos de Shooters, MOBAs, deportes o RPGs. Disfruta mucho de la aventura.
        </p>
      </div>
    </div>
  );
};

export default HomepageView;
