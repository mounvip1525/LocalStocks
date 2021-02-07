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
        favourites:[],
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
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
    removeItem=id=>{
        let tempProducts=[...this.state.products];
        let tempCart=[...this.state.cart];
        tempCart=tempCart.filter(item=>item.id !== id);
        const index=tempProducts.indexOf(this.getItem(id));
        let removedProduct=tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;
        this.setState(()=>{
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },()=>{this.computeTotals()})
        console.log("item removed from cart");
    }
    addToFavourites=(id)=>{
        // console.log(`add to cart.id is ${id}`);
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        // product.favourite=!product.favourite;
        let tempFavourites=[...this.state.favourites];
        // console.log("----",tempFavourites)
        // console.log(product.favourite)
        if(!product.favourite){
            product.favourite=true;
            this.setState(()=>{
                return{ products:tempProducts,favourites:[...this.state.favourites,product] };
            },()=>{console.log("added to favourites")});
        } else {
            tempFavourites=tempFavourites.filter(item=>item.id !== id);
            product.favourite=false;
            this.setState(()=>{
                return{ products:tempProducts,favourites:tempFavourites };
            },()=>{console.log("removed from favourites")});
        }
        console.log(this.state.favourites)
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
        },()=>{console.log(this.state);this.computeTotals()});
    }
    increment=id=>{
        let tempCart=[...this.state.cart];
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];
        product.count=product.count+1;
        product.total=product.count*product.price;
        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        },()=>{this.computeTotals()})
        console.log("count increased");
    }
    decrement=id=>{
        let tempCart=[...this.state.cart];
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct);
        const product=tempCart[index];
        product.count=product.count-1;
        if(product.count===0){
            this.removeItem(id);
        } else {
            product.total=product.count*product.price;
            this.setState(()=>{
                return{
                    cart:[...tempCart]
                }
            },()=>{this.computeTotals()})  
        }      
        console.log("count decreased");
    }
    removeItem=id=>{
        let tempProducts=[...this.state.products];
        let tempCart=[...this.state.cart];
        tempCart=tempCart.filter(item=>item.id !== id);
        const index=tempProducts.indexOf(this.getItem(id));
        let removedProduct=tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;
        this.setState(()=>{
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },()=>{this.computeTotals()})
        console.log("item removed from cart");
    }
    clearCart=()=>{
        this.setState(()=>{
            return { cart: [] };
        },()=>{ this.setProducts();
                this.computeTotals();
        });
        console.log("cart has been cleared");
    }
    computeTotals=()=>{
        let subTotal=0;
        this.state.cart.map(item=>subTotal+=item.total);
        const tax=parseFloat((subTotal*0.1).toFixed(2));
        const total=subTotal+tax;
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }
    openModal=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }
    closeModal=()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{...this.state,handleDetail:this.handleDetail,
                                      addToFavourites:this.addToFavourites,
                                      addToCart:this.addToCart,
                                      openModal:this.openModal,
                                      closeModal:this.closeModal,
                                      increment:this.increment,
                                      decrement:this.decrement,
                                      removeItem:this.removeItem,
                                      clearCart:this.clearCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}; 
