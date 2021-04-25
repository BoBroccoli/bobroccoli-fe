import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Experience from './component/Experience';
import Home from './component/Home';

ReactDOM.render(
  <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={Home} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/project" component={Home} />
  </BrowserRouter>,
  document.getElementById('root')
);