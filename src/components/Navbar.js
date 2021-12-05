import React, { Component } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer, ButtonContainer2 } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm px-sm-3  navbar-dark">
                    <Link to="/">
                        <img src={logo} alt="Store" className="navbar-brand mr-2" style={{marginTop:"-5px",color:"white",background:"white",height:"3rem"}}></img>
                    </Link>
                    <ul className="navbar-nav align-items-center ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-0"><h3 className="ml-10 mr-5" style={{color:"white"}}>Local Stocks</h3></Link>
                        </li>
                    </ul>
                    <div className="left-links">
                    <ButtonContainer2 className="d-flex">
                        <div className="left">
                            <span className="mr-2"><i className="fa fa-phone" /></span><Link to="/Contact">Volunteer</Link>
                        </div> 
                        <div>
                        <Link to="/favourites" className="left">
                            <span className="mr-2"><i className="fa fa-heart" /></span> Favourites
                        </Link> </div>
                        <div>
                        <Link to="/cart" className="left">
                            <span className="mr-2"><i className="fa fa-cart-plus" /></span> My Cart
                        </Link>
                        </div> 
                    </ButtonContainer2>
                    <Link to="/" className="ml-0">
                        <ButtonContainer>
                            <span className="mr-2"><i className="fa fa-user" /></span>Profile 
                        </ButtonContainer>
                    </Link>
                    </div>
                </NavWrapper>
                <div className="Nav2">
                    One stop destination for organic items! Enjoy Shopping
                </div>
            </div>
        )
    }
}

const NavWrapper=styled.nav`
background:var(--purpleOne);
// margin-top:10px;
.nav-link{
    color:var(--whiteOne) !important;
    font-size:1.3rem;
}
h5{
    color:var(--whiteOne) !important;
}
.left-links{
    display:flex;
    flex-direction:row;
    margin-left:auto;
}
.left{
    margin-right:1vw;
}
.right{
    margin-left:1vw;
}
`


