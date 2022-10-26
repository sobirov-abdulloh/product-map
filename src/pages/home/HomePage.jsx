import React, { useState, useEffect,useContext } from "react";
import "./homePage.css";
import axios from "axios";
import Product from "../../components/product/Product";
import { StateContext } from "../../Context/context";

function HomePage() {
  const {dispatch}=useContext(StateContext)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((rec) => {
      setProducts(rec.data);
    });
  }, []);

  return (
    <div className="homepage">
      <h1>All products</h1>
      <div className="products_list">
        {products.length > 0 ? (
          products.map((product) => <Product key={product.id} {...product} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default HomePage;
