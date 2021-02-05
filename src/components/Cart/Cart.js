import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <Title name="your" title="cart" />
                <CartColumns />
                <EmptyCart />
            </div>
        )
    }
}
