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
                    <div className="py-1">
                        <div className="container">
                            <Title name="our" title="Products" />
                            <div className="row mr-1 ml-1" >
                                <div className="side-widgets">
                                    <ul>
                                        <li><i className="fa fa-facebook p-1" /></li>
                                        <li><i className="fa fa-youtube p-1" /></li>
                                        <li><i className="fa fa-twitter p-1" /></li>
                                        <li><i className="fa fa-instagram p-1" /></li>
                                        <li><i class="fa fa-envelope p-1"></i></li>
                                    </ul>
                                </div>
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
