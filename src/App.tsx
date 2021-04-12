import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import Character from './pages/Character'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Characters} />
      <Route path="/character/:name" component={Character} />
    </Router>
  );
}

export default App;
