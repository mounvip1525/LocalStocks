import React, { Component } from 'react';
import { storeProducts , detailProduct } from './data';

//Comes with Provider(contains all the info about the application) and Consumer(for making use of the indo provided by the Provider)
const ProductContext=React.createContext();

//Sits on top of our component tree
class ProductProvider extends Component {
    state={
        // products:storeProducts,
        products:[],
        detailProduct:detailProduct,
        cart:[]
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

    getItem=(id)=>this.state.products.find(item=>item.id===id);
    // getItem=(id)=>{
    //     const foundItem=this.state.products.find(item=>item.id===id);
    //     return foundItem;
    // }

    handleDetail=(id)=>{
        // console.log("hello from handle detail");
        const productForDetail=this.getItem(id);
        this.setState(()=>{
            return { detailProduct: productForDetail }
        })
    }
    addToCart=(id)=>{
        // console.log(`add to cart.id is ${id}`);
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price=product.price;
        product.total=price;
        this.setState(()=>{
            return{ products:tempProducts, cart:[...this.state.cart,product] };
        },()=>{console.log(this.state)});
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
