import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Services from './components/pages/Services';
import LogOut from './components/pages/LogOut';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Certificates from './components/pages/Certificates';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/services' component={Services} />
          <Route path='/log-out' component={LogOut} />
          <Route path='/about-us'component={AboutUs} />  
          <Route path='/contact' component={ContactUs}/>   
          <Route path='/certificates' component={Certificates}/>
        </Switch>
        </Router>
    </>
  );
}

export default App;