import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home.jsx'
import Market from './components/Market.jsx'
import Navigation from './components/Navigation.jsx'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Statement from './components/Statement.jsx'
import UserRegister from './components/UserRegister.jsx'
import UserLogin from './components/UserLogin.jsx'
import MarketListing from './components/MarketListing.jsx'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/market' component={Market}/>
        <Route exact path='/market/listing' component={MarketListing}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/statement' component={Statement}/>
        <Route exact path='/register' component={UserRegister}/>
        <Route exact path='/login' component={UserLogin}/>
      </Switch>
    </div>
  );
}

export default App;
