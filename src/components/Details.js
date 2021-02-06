import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../components/Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const { id, img, info, price, title, inCart, features }=value.detailProduct;
                    return(
                        <div className="container2">
                            <div className="row detail-container">
                                <div className="col-10 mx-auto col-md-5 my-5 mr-0 ml-0 p-0">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-7 my-5 text-capitalize ml-5 detail-container2">
                                    <h2>Model : {title} </h2>
                                    <h3>price : $ {price}</h3>
                                    <p className="text-capitalize mt-1 mb-0">some info about product:</p>
                                    <p className="text-muted">{info}</p>
                                    <ul> Features
                                    {features.map(feature=>{
                                        return(
                                            <p className="features">- {feature}</p>
                                        )
                                    })}
                                    </ul>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back to Products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{value.addToCart(id);value.openModal(id)}}>
                                            {inCart ? "In Cart": "Add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
