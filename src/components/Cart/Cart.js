import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';

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
                                <CartColumns />
                                <CartList value={value}/>
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
