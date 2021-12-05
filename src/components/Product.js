import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';
export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart, favourite } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 p-1 mb-0 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value=>(
                    <div>
                        <div className="img-container p-0" onClick={()=>{value.handleDetail(id)}}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top product-img" />
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false }
                                onClick={()=>{value.addToCart(id);value.openModal(id)}}>
                                { inCart ? 
                                    <p className="text-capitalize mb-0 cart-text" disabled>{" "} in Cart</p>
                                    :
                                    <i className="fa fa-cart-plus" />
                                }
                            </button>
                        </div>
                        <div className="card-footer d-flex justify-content-between mt-1">
                            <div className="d-flex">
                                {favourite ? <i className="fa fa-heartbeat mr-2 detail-heart" title="Remove from favourites" onClick={()=>{value.addToFavourites(id)}}/> :
                                             <i className="fa fa-heart mr-2 detail-heart" title="Add to favourites" onClick={()=>{value.addToFavourites(id)}} />}
                                <p className="align-self-center mb-0 text-footer">{title}</p>
                            </div>
                            <h5 className="mb-0">
                                <span className="mr-1">$</span>{price}
                            </h5>
                        </div>
                    </div>
                     )}
                    </ProductConsumer>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all 0.2s linear;
    // background:#7FC8A9
}
.cart-text{
    font-size:0.85rem;
}
.card-footer {
    background: #7FC8A9;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover {
.card {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
}
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    transition: all 0.2s linear;  
}
.img-container:hover .card-img-top {
    transform: scale(1.25);
    padding:5px;
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    border: none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
    background-color: var(--purpleTwo); 
}
.img-container:hover .cart-btn {
    transform: translate(0, 0);
}
.cart-btn:hover {
    cursor: pointer;
}`;