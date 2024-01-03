import React, { useContext } from "react";
import './Navbar.css';
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import cart_icon from '../Assets/cart_icon.png';
import logo from '../Assets/logo.jpg';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar=()=>
{
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return(
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>BooksMania</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color:'black'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("newarrivals")}}><Link style={{textDecoration:'none',color:'black'}} to='/newarrivals'>New Arrivals</Link>{menu==="newarrivals"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("bestsellers")}}><Link style={{textDecoration:'none',color:'black'}} to='/bestsellers'>BestSellers</Link>{menu==="bestsellers"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("awardwinners")}}><Link style={{textDecoration:'none',color:'black'}} to='/awardwinners'>Award Winners</Link>{menu==="awardwinners"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("fictionbooks")}}><Link style={{textDecoration:'none',color:'black'}} to='/fictionbooks'>fictionbooks</Link>{menu==="fictionbooks"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("featuredauthors")}}><Link style={{textDecoration:'none',color:'black'}} to='/featuredauthors'>Featured Authors</Link>{menu==="featuredauthors"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to ='/Login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <Link to='/Dashboard'><DashboardIcon id="dashboard"/></Link>
            </div>
        </div>
    )
}
export default Navbar;