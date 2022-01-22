import ProductCard from "./ProductCard.js";
import "./ProductList.css";

function ProductList({ currentProduct, products, setCurrentProduct }) {
  return (
    <div className="productList animate__animated animate__fadeInDownBig" >
      {products.map((product, index) => {
        return (
          <ProductCard
          
            key = {index}
            currentProduct={currentProduct}
            product={product}
            setCurrentProduct={setCurrentProduct}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
