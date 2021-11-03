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

const HomepageView: React.FC = () => {
  return (
    <div css={backgroundImage}>
      <div>
        <h1>FixWithKors Gaming</h1>
        <p> Description</p>
      </div>
    </div>
  );
};

export default HomepageView;
