import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import Favourites from './Favourites';
import Title from '../Title';
import { ButtonContainer } from '../Button';
import {Link} from 'react-router-dom';

export default class FavouritesList extends Component {
    render() {
        return (
           <ProductConsumer>
               {value=>{
                //    console.log("-",value.favourites)                   
                   return(
                       <div className="favouritesList">
                           {value.favourites.length>0 ?
                               value.favourites.map(item=>{
                                return (
                                <Favourites item={item} value={value}/>
                            )}):
                                <div>
                                    <Title name="You have NO" title="Favourites"/>
                                    <Link to="/"><ButtonContainer><p>Back to Home page</p></ButtonContainer></Link>
                                </div>
                        }
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
