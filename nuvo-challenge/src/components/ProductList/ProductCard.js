import { ArrowLeftCircle } from "react-bootstrap-icons";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import "./ProductList.css";

function ProductCard({ currentProduct, product, setCurrentProduct }) {
  return (
    <div className="product-info-container"
      onClick={() => {
        setCurrentProduct(product);
      }}
    >
      <img src={product.image} style={{ width: 100 }} />
      <span className="product-title">{product.title}
      {currentProduct !== null && product.title == currentProduct.title ? (
        <ArrowRightCircleFill class="animate__animated animate__flipInX" width="30" height="30" style={{color:"teal"}} />
      ) : (
        <ArrowLeftCircle width="30" height="30" style={{color:"teal"}} />
      )}
      
      </span>
    </div>
  );
}

export default ProductCard;
