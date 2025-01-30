import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
