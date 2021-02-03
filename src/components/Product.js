import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-1"
                        onClick={()=>{console.log("you clicked me lol")}}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top product-img" />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false }
                            onClick={()=>{console.log("added to the cart");}}>
                            { inCart ? 
                                <p className="text-capitalize mb-0" disabled>{" "} in Cart</p>
                                :
                                <i className="fa fa-cart-plus" />
                            }
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0 text-footer">{title}</p>
                        <h5 className="font-italic mb-0">
                            <span className="mr-1">$</span>{price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper=styled.div`
background:transparent;
`;
