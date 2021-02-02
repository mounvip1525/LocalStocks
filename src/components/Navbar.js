import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm px-sm-3 bg-primary navbar-dark">
                    <Link to="/">
                        <img src={logo} alt="Store" className="navbar-brand"></img>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><h4>Clothing Store</h4></Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2"><i className="fa fa-cart-plus" /></span> cart
                        </ButtonContainer>
                    </Link>
                </nav>
            </div>
        )
    }
}


