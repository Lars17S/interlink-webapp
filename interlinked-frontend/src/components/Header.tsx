import React from 'react';
import { useHistory } from 'react-router-dom';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */ import { Button } from '@mui/material';

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
  const history = useHistory();
  return (
    <div css={HeaderStyle}>
      <div css={DivTitleStyle}>
        <h1 css={HeaderTitle}> Interlinked Webapp</h1>
      </div>
      <div css={DivTitleStyle}>
        <Button
          id="menu"
          onClick={() => {
            history.push('/');
          }}
        >
          Menu
        </Button>
        <Button
          id="videos"
          onClick={() => {
            history.push('/videos');
          }}
        >
          Videos
        </Button>
        <Button
          id="events"
          onClick={() => {
            history.push('/events');
          }}
        >
          Eventos
        </Button>
        <Button
          id="about us"
          onClick={() => {
            history.push('/aboutus');
          }}
        >
          Acerca de
        </Button>
        <Button
          id="login"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
        <Button
          id="management"
          onClick={() => {
            history.push('/management');
          }}
        >
          Management
        </Button>
      </div>
    </div>
  );
};

export default Header;
