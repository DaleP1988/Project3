import React from 'react';
import { Col, Container, Row } from './components/Grid';
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Container className="ground">
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
      </Container>
    </div>
  </Router>
);

export default App;
