import React from 'react';
import { Col, Container, Row } from './components/Grid';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/booking" component={ Booking } />
        <Route exact path="/about" component={ About } />
      </Switch>
    </div>
  </Router>
);

export default App;
