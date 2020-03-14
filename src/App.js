import React from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/menu' component={Menu} />
      </Router>
    </div>
  );
}

export default App;
