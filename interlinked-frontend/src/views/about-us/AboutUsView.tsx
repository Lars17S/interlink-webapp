import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const backgroundBlock = css({
  width: '100%',
  backgroundColor: 'black',
  minHeight: 'calc(100vh)',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  color: 'white',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',

  
});

const blockValues = css({
  width:'50%',
  paddingBottom: '1em',
  fontSize: '1.5em',
  lineHeight: '2.5em',
  
  
});
const paragraphBlock = css({
  lineHeight: '1em',
});
const socialMediaBlock = css({
  justifyContent: 'right',

});
const AboutUsView: React.FC = () => {
  return (
    <div css={backgroundBlock}>
      <div css={blockValues}>
        <h2>FixWithKors Gaming</h2>
        <p css={paragraphBlock}>FixWithKors es una empresa ubicada en la Plaza Cuicuilco. Para más información ingresar a nuestras 
          redes sociales mostradas más abajo
        </p>
        <div css={socialMediaBlock}>
          <FacebookIcon onClick={() => window.open('https://www.facebook.com/', '_blank')}/>
          <InstagramIcon onClick={() => window.open('https://www.instagram.com/', '_blank')} />
          <TwitterIcon  onClick={() => window.open('https://twitter.com/', '_blank')}/>
        </div>
      </div>
    </div>
  );
};

export default AboutUsView;
