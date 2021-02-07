import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer3 } from '../components/Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const { id, img, info, price, title, inCart, features, favourite }=value.detailProduct;
                    return(
                        <div className="container2">
                            <div className="row detail-container">
                                <div className="col-10 mx-auto col-md-5 my-5 mr-0 ml-0 p-0">
                                    <h1 className="img-next">
                                        <span>
                                        {favourite ? <i className="fa fa-heartbeat p-2 detail-heart" title="Remove from favourites" onClick={()=>{value.addToFavourites(id)}}/> :
                                                     <i className="fa fa-heart p-2 detail-heart" title="Add to favourites" onClick={()=>{value.addToFavourites(id)}} />}
                                        </span>
                                    </h1>
                                    <img src={img} className="img-fluid detail-img" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-7 text-capitalize ml-5 detail-container2">
                                    <div className="mt-5">
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
                                    <div className="d-flex">
                                        <ButtonContainer3 cart disabled={inCart?true:false} onClick={()=>{value.addToCart(id);value.openModal(id)}}>
                                            {inCart ? "In Cart": "Add to Cart"}
                                        </ButtonContainer3>
                                        <Link to="/">
                                            <ButtonContainer3>Back to Home</ButtonContainer3>
                                        </Link>
                                    </div>
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
