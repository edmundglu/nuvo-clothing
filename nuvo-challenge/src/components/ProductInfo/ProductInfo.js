import React, { useEffect, useState } from "react";
import { StarFill } from "react-bootstrap-icons";
import { StarHalf } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";


import "./ProductInfo.css";

function ProductInfo({currentProduct}) {
    let rating = currentProduct.rating.rate;
    const stars = []
    while (rating > 0.4){
        if (rating >= 0.8){
           stars.push(<StarFill/>) 
           rating -= 1
        } else {
            stars.push(<StarHalf/>)
            rating -=5
        }
        
    }

    return (
      <div className="info">
          <h1 >${currentProduct.price}</h1>
          <p>{currentProduct.description}</p>
          <p> {stars} ({currentProduct.rating.count})</p>
          <div>
          <Button size="lg">Add to Cart</Button>
        </div>
      </div>
      
    );
  }

  export default ProductInfo;