import React, { Component } from 'react';
import { storeProducts , detailProduct } from './data';

//Comes with Provider(contains all the info about the application) and Consumer(for making use of the indo provided by the Provider)
const ProductContext=React.createContext();

//Sits on top of our component tree
class ProductProvider extends Component {
    state={
        // products:storeProducts,
        products:[],
        detailProduct:detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(product=>{
            const singleProduct={...product};
            tempProducts=[...tempProducts,singleProduct];
        });
        this.setState(()=>{
            return { products: tempProducts };
        });
    };
    handleDetail=()=>{
        console.log("hello from handle detail");
    }
    addToCart=(id)=>{
        console.log(`add to cart.id is ${id}`);
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}; 
