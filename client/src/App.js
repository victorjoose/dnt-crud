import React from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuCardapio } from './Components/Menu/MenuCardapio';
import MenuCardapioResp from './Components/Menu/MenuCardapioResp';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/menu' component={MenuCardapio} />
        <Route path='/menuresp' component={MenuCardapioResp}></Route>
      </Router>
    </div>
  );
}

export default App;
