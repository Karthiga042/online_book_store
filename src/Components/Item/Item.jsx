import React from "react";
import './Item.css';
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

const Item=(props)=>
{
    return(
        <div className="item"  style={{border: '4px solid red', padding:'10px'}}>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                    <div className="item-price-new">
                            ${props.new_price}
                    <Favorite id="favourite"/>
                    </div>
                    <div className="item-price-old">
                            ${props.old_price}
                    <a href="/cart"> <AddShoppingCartIcon id="cart"/></a>  
                    </div>
            </div>
        </div>
    );
}
export default Item