import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import Property from './components/property';
import Validation from './components/validation';
import Dashboard from './components/dashboard';
import Resolve from './components/resolve';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/properties/:property_id' component={Property} />
      <Route exact path='/properties/validation/:property_id' component={Validation} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/resolve/:property_id' component={Resolve} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
