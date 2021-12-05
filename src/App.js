import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';

import ProductsView from './components/ProductsView';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound';
import Navbar from "./components/Navbar";
import Modal from './components/Modal';
import Footer from './components/Footer';
import Favourites from './components/Favourites/FavouritesList';
import Home from "./components/Home";
import ContactMe from "./components/contact";
import Faq from "./components/Faq";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductsView} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/Contact" component={ContactMe} />
        <Route path="/faq" component={Faq} />
        {/* if nthing matces then NotFound will be dispalyed */}
        <Route component={NotFound} />
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
