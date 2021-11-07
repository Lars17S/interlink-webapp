import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */ import { Button } from '@mui/material';
import { maxWidth } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';


const breakpoints = [830, 1200, 1500]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const HeaderStyle = css({
  padding: '1em',
  backgroundColor: 'black',
  width: 'auto',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  [mq[0]]: {
    //responsive smallest
  },
  [mq[1]]: {
    //responsive middle size
 
  }
});

const DivTitleStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingRight: '3em',
  [mq[0]]: {
    //responsive smallest
    flexDirection: 'column',
    
  },
  [mq[1]]: {
    //responsive middle size
    
  }

});


const HeaderTitle = css({
  fontWeight: 500,
  fontSize: '3rem',
  color: 'white',
  [mq[0]]: {
    //responsive smallest
    display: 'none',
  },
  [mq[1]]: {
    //responsive middle size
    fontWeight: 10,
    fontSize: '2rem',
    
  }
});

const buttonStyle = css({
  [mq[0]]: {
    //responsive smallest
    display: 'none',
  },
  [mq[1]]: {
    //responsive middle size
    fontSize: '1rem',
    
  }
});
const buttonStyleShow = css({
  [mq[0]]: {
    //responsive smallest
    display: 'flex',
    position: 'relative',
    backgroundColor: 'black',
    marginTop:'1em',


  },
  [mq[1]]: {
    //responsive middle size
    fontSize: '1rem',
    
  }
});

const hamburgerStyle = css({
  color: 'white',
  display: 'none',
  fontSize: '3em',
  [mq[0]]: {
    //responsive smallest
    display: 'flex',
    position: 'relative',

  },
  [mq[1]]: {
    //responsive middle size
    
    
  }
});


interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const history = useHistory();

  const [showLinks, setShowLinks] = useState(false);
  return (
    <div css={HeaderStyle} className="mainDiv">
      <div css={DivTitleStyle}>
        <h1 css={HeaderTitle}> Interlinked Webapp</h1>
      </div>
      <div css={DivTitleStyle} className="buttonDiv">
        <MenuIcon css={hamburgerStyle}
          onClick={() => 
            
            setShowLinks(!showLinks)
          }
        />
        <Button 
          css={showLinks ?  buttonStyleShow : buttonStyle}
          id="home"
          onClick={() => {
            history.push('/');
            setShowLinks(false);
          }}
        >
          Home
        </Button>
        <Button
          css={showLinks ?  buttonStyleShow : buttonStyle}
          id="videos"
          onClick={() => {
            history.push('/videos');
            setShowLinks(false);
          }}
        >
          Videos
        </Button>
        {/* <Button
          id="events"
          onClick={() => {
            history.push('/events');
          }}
        >
          Eventos
        </Button> */}
        <Button
          css={showLinks ?  buttonStyleShow : buttonStyle}
          id="about us"
          onClick={() => {
            history.push('/aboutus');
            setShowLinks(false)
          }}
        >
          Acerca de
        </Button>
        <Button
          css={showLinks ?  buttonStyleShow : buttonStyle}
          id="login"
          onClick={() => {
            history.push('/login');
            setShowLinks(false)
          }}
        >
          Login
        </Button>
        <Button
          css={showLinks ?  buttonStyleShow : buttonStyle}
          id="management"
          onClick={() => {
            history.push('/management');
            setShowLinks(false)
          }}
        >
          Management
        </Button>
      </div>
    </div>
  );
};

export default Header;
