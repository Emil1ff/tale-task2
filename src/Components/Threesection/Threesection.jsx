import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import "./threesection.css";
import { CiShoppingCart } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Threesection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

const getApi = async()=> {
  try {
    await axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
    
  } catch (error) {
    console.log(error);
    
  }
};

  useEffect(() => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((response) => {
    //     setProducts(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("API error:", error);
    //     setError(error);
    //     setLoading(false);
      // });
      getApi();
  }, []);

  return (
    <section>
      <div className="projects">
        <div className="title">
          <div className="text">
            <h2>
              Discover Our <em>Work</em> &amp; <span>Projects</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
              eiusmod.
            </p>
          </div>
        </div>
        <div className="products">
          {loading && <p>Loading products...</p>}
          {error && <p>Error: {error.message}</p>}
          {products.length > 0 && !loading && !error
            ? products.map((product) => (
                <div className="product" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <div className="content">
                    <h4>{product.title}</h4>
                    <div className="icon">
                      <CiHeart />
                  <button onClick={() => navigate(`/detail/${product.id}`)}>Detail</button>
                      <CiShoppingCart />
                    </div>
                  </div>
                </div>
              ))
            : !loading && <p>No products available</p>}
        </div>
      </div>
    </section>
  );
};
