import React, { useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

const ProductList = ({ searchTerm }) => {
  const { products, loading, error } = useFetchProducts();

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
