import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const backgroundDesign = css({
  backgroundColor: 'black',
  color: 'white',
});

const AboutUsView: React.FC = () => {
  return (
    <div css={backgroundDesign}>
      <h2>FixWithKors Gaming</h2>
      <p>Descripcion de la empresa</p>
      <FacebookIcon />
    </div>
  );
};

export default AboutUsView;
