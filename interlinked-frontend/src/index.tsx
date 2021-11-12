import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import AboutUsView from './views/about-us/AboutUsView';
import EventsView from './views/events/EventsView';
import HomepageView from './views/HomepageView';
import LoginView from './views/LoginView';
import ManagementView from './views/management/ManagementView';
import VideosView from './views/videos/VideosView';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { isLoggedIn } from './firebase/firebaseAuth';
import PrivateRoute from './components/PrivateRoute';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#121212',
    },
  },
  typography: {
    button: {
      fontSize: '28px',
      textTransform: 'none',
    },
  },
});

const App: React.FC = () => {
  const [userAcc, setUserAcc] = useState<UserAcc>();
  return (
    <BrowserRouter>
      <Header userAcc={userAcc} />
      <Switch>
        <Route path="/videos">
          <VideosView />
        </Route>
        <Route path="/events">
          <EventsView />
        </Route>
        <Route path="/aboutus">
          <AboutUsView />
        </Route>
        <Route path="/login">
          <LoginView setUserAcc={setUserAcc} />
        </Route>
        <PrivateRoute path="/management" hasPermission={isLoggedIn(userAcc)}>
          <ManagementView />
        </PrivateRoute>
        <Route path="/">
          <HomepageView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
