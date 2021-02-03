import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
// import {storeProducts} from '../data';
import { ProductConsumer } from '../context';
export default class ProductsView extends Component {
    // state={
    //     products:storeProducts
    // }
    render() {
        // console.log(this.state.products)
        return (
            <React.Fragment>
                <div>
                    {/* <Product /> */}
                    <div className="py-1">
                        <div className="container">
                            <Title name="our" title="Products" />
                            <div className="row mr-5 ml-5" >
                                <ProductConsumer>
                                    {value=>{
                                        // console.log(value)
                                        return value.products.map(product=>{
                                        return <Product key={product.id} product={product} />
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
