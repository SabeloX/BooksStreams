import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import Navbar from './Navigation/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';

const App = () =>{
  return (
    <Router>
      <div className="App">
        <Navbar id='navbar'/>
        <Switch id='routes'>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
        </Switch>
        <Footer id='footer'/>
      </div>
    </Router>
  );
}

export default App;
