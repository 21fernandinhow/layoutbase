import React from "react";

function ProductItem (props){
    return(
        <div className="product-item">
            <img className="product-img" alt="product" src={props.link}/>
            <h4>{props.name}</h4>
        </div>
    )
};

export default ProductItem;