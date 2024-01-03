import React from "react";
import './Breadcrum.css';
import { ArrowLeft } from "@mui/icons-material";

const Breadcrum = (props) =>
{
    const {product}=props;
    return(
        <div className="breadcrum">
            HOME
            <ArrowLeft/>
            SHOP 
            <ArrowLeft/>
            {product.category}
            <ArrowLeft/>
            {product.name}
        </div>
    )
}
export default Breadcrum