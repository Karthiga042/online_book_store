import React, { useContext} from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Link } from 'react-router-dom';

const ShopCategory=(props)=>
{
    const {all_product}=useContext(ShopContext)
    return(
        <div className='shop-category'>
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing 1-12 </span>
                    out of 40 products
                </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className='shopcategory-products'>
                    {all_product.map((item,i)=>{
                        if(props.category===item.category)
                        {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }
                        else
                        {
                            return null;
                        }
                    })}
                        </div>
            <div className='shopcategory-loadmore'>
                <TravelExploreIcon id="travel"/>
           <Link to="/newarrivals" style={{textDecoration:'none'}}><p> Explore More</p></Link>
            </div>
        </div>
    )
}
export default ShopCategory
