import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import Favourites from './Favourites';
import Title from '../Title';
import { ButtonContainer3 } from '../Button';
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
                                <div className="notfound2">
                                    <Title name="You have NO" title="Favourites"/>
                                    <div className="w-100 text-center divider-bottom">
                                        <Link to="/">
                                            <ButtonContainer3>
                                                <p className="m-0 p-0">Back to Home page</p>
                                            </ButtonContainer3>
                                        </Link>
                                    </div>
                                </div>
                        }
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
