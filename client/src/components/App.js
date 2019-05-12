import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <div className="ui divider"></div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
