import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomepageView from './views/HomepageView';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <PrivateRoute path="management" hasPermission={isLoggedIn(userAcc)}>
          <ManagementRouter />
        </PrivateRoute> */}
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
