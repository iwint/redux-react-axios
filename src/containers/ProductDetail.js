import { React, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedproduct,
  removeselectedproduct,
} from "../redux/actions/Product-Actions";

function ProductDetail() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { image, title, description, category, price } = product;
  const { productId } = useParams();
  console.log(productId);
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(selectedproduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProduct();
    return () => {
      dispatch(removeselectedproduct());
    };
  }, [productId]);
  console.log("ProductId:", product);

  return (
    <div
      className="ui grid container "
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
        height: "100vh",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {Object.keys(product).length === 0 ? (
        <div>Loading.....</div>
      ) : (
        <div
          className="ui placeholder segment"
          style={{
            width: "500px",
            height: "100%",

            marginBottom: "50px",
          }}
        >
          <div className="middle aligned row ">
            <div
              className="column lp"
              style={{
                width: "300px",
                height: "200px",
                marginLeft: "70px",
              }}
            >
              <img
                className="ui fluid image "
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={image}
                alt={title}
              />
            </div>
            <div className="column rp" style={{ marginTop: "10px" }}>
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3
                className="ui brown block header"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                }}
              >
                {category}
              </h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
