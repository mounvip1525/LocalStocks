import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import Favourites from './Favourites';

export default class FavouritesList extends Component {
    render() {
        return (
           <ProductConsumer>
               {value=>{
                //    console.log(value.favourites)                   
                   return(
                       <div>
                           {value.favourites.map(item=>{
                               return <Favourites item={item} value={value} />
                           })}
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
