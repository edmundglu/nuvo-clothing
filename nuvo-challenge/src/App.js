import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductList from "./components/ProductList/ProductList";
import 'animate.css';

function App() {
  const [products, setProducts] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="app">
      <div className="top">
        <div className="heading">
                  
        <h1 class="animate__animated animate__zoomIn">Nuvo Clothing Co</h1>
        
      </div>
      <p className="description" >
        The newest apparel to hit the shelves for 2022
      </p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {products !== null ? (
          <ProductList
            products={products}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
          />
        ) : null}
        {currentProduct !== null ? (
          <ProductInfo currentProduct={currentProduct} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
