import React from "react";
import './Wishlist.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import new_collection from '../Assets/new_collections';

const Wishlist = () =>
{
    return(
        <div className="Wishlist">
            <h1>Wishlist</h1>
            <hr/>
            <div className="Wishlist-item">
            {new_collection.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })}
            </div>
            <div className="Wishlist-item">
            {data_product.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
            </div>
        </div>
    )
}
export default Wishlist