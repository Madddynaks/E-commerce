import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      
      {/* 🟢 Buttons Wrapped Inside a Flex Container */}
      <div className="button-group">
        <Link to={`/product/${product.id}`}>
          <button className="view-details-btn">View Details</button>
        </Link>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
