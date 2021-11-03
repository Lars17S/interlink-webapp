import React from 'react';
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

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
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
          <LoginView />
        </Route>
        <Route path="/management">
          <ManagementView />
        </Route>
        <Route path="/">
          <HomepageView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
