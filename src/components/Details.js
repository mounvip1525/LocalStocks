import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../components/Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const { id, img, info, price, title, inCart }=value.detailProduct;
                    return(
                        <div className="container w-75">
                            {/* <div className="row mt-0">
                                <div className="col-10 mx-auto text-center text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div> */}
                            <div className="row detail-container">
                                <div className="col-10 mx-auto col-md-5 my-5 mr-0 ml-0 p-0">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-7 my-5 text-capitalize ml-5 detail-container2">
                                    <h2>Model : {title} </h2>
                                    <h2><strong>price : <span>$</span>{price}</strong></h2>
                                    <p className="text-capitalize lead mt-1 mb-0">some info about product:</p>
                                    <p className="text-muted lead">{info}</p>
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
