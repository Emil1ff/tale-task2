import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../Header/Header";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Footer } from "../../Footer/Footer";
import "../Detail/Detail.css"



export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const getApi = async () => {
    try {
      await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      getApi();
    }
  }, [id]);
  return (
<>
  <Header />
  <main className="detail-page">
    <section className="product-detail">
      <div className="product-card">
        <div className="icon-wrapper">
          <CiHeart className="heart-icon" />
        </div>
        <img src={data.image} alt={data.title} className="product-image" />
        <div className="product-content">
          <h1 className="product-title">{data.title}</h1>
          <p className="product-category">{data.category}</p>
          <p className="product-description">{data.description}</p>
          <p className="product-price">Price: ${data.price}</p>
          <div className="product-actions">
            <button className="btn back-button" onClick={() => navigate(`/`)}>
              Ana səhifəyə qayıt
            </button>
            <button className="btn cart-button">
              <CiShoppingCart /> Səbətə əlavə et</button>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</>


  );
};
