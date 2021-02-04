import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';

import ProductsView from './components/ProductsView';
import Details from './components/Details';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Navbar from "./components/Navbar";
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsView} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        {/* if nthing matces then NotFound will be dispalyed */}
        <Route component={NotFound} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
