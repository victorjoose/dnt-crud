import React from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuCardapio } from './Components/Menu/MenuCardapio';
import MenuLayout from './MenuLayout';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/menu' component={MenuCardapio} />
        <Route path='/layout' component={MenuLayout}></Route>
      </Router>
    </div>
  );
}

export default App;
