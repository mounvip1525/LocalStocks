import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer3} from '../Button';
import Title from '../Title';

export default function Favourites({item,value}) {
    const { img, inCart, info, title, id, price }=item;
    return (
        <div className="cartItem align-items-center py-3 px-3 pb-4 col-lg-8 mx-auto mt-3">
        <div className="cart-heading">
            <h3>{title}</h3>
            <h5 className="mt-2">Price- $ {price}</h5>
        </div>
        <div className="media mb-3">
        <img className="mr-3" src={img} style={{width:"12rem",height:"12rem",objectFit:"cover"}} alt="product"   />
        <div className="media-body">
            <div className="container-fluid d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-10">
                        <h5 className="text-muted text-capitalize">{info}</h5>
                    </div>
                </div>
            </div>
            <div className="mt-5 ml-3">
                <Link to="/">
                    <ButtonContainer3>Back to Products</ButtonContainer3>
                </Link>
                <ButtonContainer3 cart disabled={inCart?true:false} onClick={()=>{value.addToCart(id);value.openModal(id)}}>
                    {inCart ? "In Cart": "Add to Cart"}
                </ButtonContainer3>
            </div>
            <div className="ml-3">
                <ButtonContainer3 onClick={()=>value.addToFavourites(id)}>Remove from Favourites
                    <i className="fa fa-heart-broken"></i>
                </ButtonContainer3>
            </div>
        </div>
        </div>
    </div>
    )
}

