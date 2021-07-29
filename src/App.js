import React from 'react';
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './utils/PrivateRoute'

import Home from './components/Home.jsx'
import Market from './components/Market.jsx'
import Navigation from './components/Navigation.jsx'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Statement from './components/Statement.jsx'
import UserRegister from './components/UserRegister.jsx'
import UserLogin from './components/UserLogin.jsx'
import MarketListing from './components/MarketListing.jsx'
import ItemImage from './components/ItemImage.jsx'
import Product from './components/Product.jsx'
import Profile from './components/Profile.jsx'
import Footer from './components/Footer.jsx'
import UserGoods from './components/UserGoods.jsx';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/market' component={Market}/>
        <Route exact path='/market/item/:id' component={Product}/>
        <PrivateRoute exact path='/market/listing' component={MarketListing}/>
        <PrivateRoute exact path='/market/image/:id' component={ItemImage}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/statement' component={Statement}/>
        <Route exact path='/user/register' component={UserRegister}/>
        <Route exact path='/user/login' component={UserLogin}/>
        <PrivateRoute exact path='/user/profile' component={Profile}/>
        <PrivateRoute exact path='/user/profile/goods' component={UserGoods}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
