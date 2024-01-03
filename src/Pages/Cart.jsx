import React from 'react';
import CartItems from '../Components/CartItems/CartItems';

const Cart=()=>
{
    return(
        <div>
            {/* <center>
            <h1 style={{color:'#555555' ,marginTop:'5cm',marginBottom:'5cm',fontSize:'2cm'}}>Your Cart is Empty!!!</h1>
            </center> */}
            <CartItems/>
        </div>
    );
}
export default Cart