import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
export default class ProductsView extends Component {
    state={
        products:[]
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    {/* <Product /> */}
                    <div className="py-1">
                        <div className="container">
                            <Title name="our" title="Products" />
                            <div className="row" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
