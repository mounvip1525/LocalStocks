import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value=>{
                        const {cart}=value;
                        if(cart.length>0){
                            return(
                              <React.Fragment> 
                                <Title name="your" title="cart" />
                                {/* <CartColumns /> */}
                                <div className="container-fluid d-lg-block">
                                    <div className="row">
                                        <div className="col-10 mx-auto col-lg-8">
                                            <CartList value={value}/>
                                        </div>
                                        <div className="col-10 mx-auto col-lg-4">
                                            <CartTotals value={value} history={this.props.history}/>
                                        </div>
                                    </div>
                                </div>
                              </React.Fragment> 
                                )
                        } else {
                            return(<Title name="your cart is currently" title="empty" />)
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
