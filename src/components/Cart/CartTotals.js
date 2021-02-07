import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({value,history}) {
    const { cartSubTotal , cartTax , cartTotal , clearCart }=value;
    return (
        <div className="container">
            <div className="row cartTotals">
                <div className="col-10 mt-2 ml-sm-5 col-sm-8 text-capitalize text-center">
                    <h3 style={{background:"#DBDBDB"}} className="px-3 py-1">Your Bill</h3>
                    <Link to="/"><button className="btn btn-outline-danger text-upercase mb-3 px-5" 
                        type="button" onClick={()=>clearCart()}>Clear Cart</button>
                    </Link>
                    <div style={{background:"#DBDBDB"}} className="px-3 py-2 mb-3">
                        <h5 className="cart-price"><span> subtotal :</span>{" "}
                            <strong>$ {cartSubTotal} </strong>
                        </h5>
                        <h5 className="cart-price"><span> tax :</span>{" "}
                            <strong>$ {cartTax} </strong>
                        </h5>
                        <h5 className="cart-price"><span> total :</span>{" "}
                            <strong>$ {cartTotal} </strong>
                        </h5>
                    </div>
                    <PayPalButton
                        total={cartTotal}
                        clearCart={clearCart}
                        history={history}>
                    </PayPalButton>
                </div>
            </div>
            
        </div>
    )
}
