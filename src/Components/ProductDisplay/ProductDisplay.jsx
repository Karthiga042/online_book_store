import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) =>
{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-right-description">
                    <h2>Product Details:</h2>
                  <h4>Product Name:</h4> {product.name} 
                  <h4>Product Category: </h4>{product.category}  
                  <h4>Product Description: </h4>
                  <p>
                Prepare to be swept away on a literary journey that will linger in your thoughts long after the final chapter.
                 {product.name} is a testament to the enduring power of a well-told story and the magic that lies within the pages of a truly compelling book.
                 </p>
                </div>
                <button onClick={() =>{addToCart(product.id)}}>Add To Cart</button>
            </div>
        </div>
    )
}
export default ProductDisplay;