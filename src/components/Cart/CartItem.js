import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem({item,value}) {
    const { id , title , img , price , total , count , info } = item;
    const { increment , decrement , removeItem } =value;
    console.log(id)
    return (
        <div className="cartItem ml-3 py-3 px-3 pb-4">
            <div className="cart-heading">
                <h3>{title}</h3>
                <p className="mt-2">Price- $ {price}</p>
            </div>
            <div className="media mb-3">
            <img className="mr-3" src={img} style={{width:"12rem",height:"12rem",objectFit:"cover"}} alt="product"   />
            <div className="media-body">
                <div className="container-fluid d-lg-block">
                    <div className="row">
                        <div className="col-10 mx-auto col-lg-10">
                            <h5 className="text-muted text-capitalize">{info}</h5>
                            <div className="button-count"> 
                                <span className="btn btn-black" onClick={()=>decrement(id)}>-</span>
                                <span className="btn btn-black center-button">{count}</span>
                                <span className="btn btn-black" onClick={()=>increment(id)}>+</span>
                            </div>
                            <div className="d-flex">
                                <div className="cart-icon mt-1" onClick={()=>removeItem(id)}>Delete<i className="fa fa-trash" /></div>
                                <div className="mt-1 cart-icon">| Save for later<i className="fa fa-bookmark" /></div>
                                <Link to="/" style={{textDecoration:"none"}}>
                                    <div className="mt-1 cart-icon">| See more<i className="fa fa-home" /></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="cart-footer">
                <h5 className="mt-0">Subtotal ({count} items)-  <strong>$ {total}</strong></h5>
            </div>
        </div>
    )
}
