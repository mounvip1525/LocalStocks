import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';

import ProductsView from './components/ProductsView';
import Details from './components/Details';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsView} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
