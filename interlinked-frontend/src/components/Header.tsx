import React from 'react';
import { css } from '@emotion/react';
import { Button } from '@mui/material';

const HeaderStyle = css({
  padding: '1em',
  backgroundColor: 'black',
  width: '90%',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto 3rem',
});

const DivTitleStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const HeaderTitle = css({
  fontWeight: 500,
  fontSize: '3rem',
  color: 'white',
});

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div css={HeaderStyle}>
      <div css={DivTitleStyle}>
        <h1 css={HeaderTitle}> Interlinked Webapp</h1>
      </div>
      <div css={DivTitleStyle}>
        <Button id="menu">Menu</Button>
        <Button id="videos">Videos</Button>
        <Button id="events">Eventos</Button>
        <Button id="about us">Acerca de</Button>
        <Button id="login">Login</Button>
      </div>
    </div>
  );
};

export default Header;
