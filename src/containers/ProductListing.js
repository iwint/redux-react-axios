import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setproducts } from "../redux/actions/Product-Actions";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setproducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products :", products);
  return (
    <div className="ui grid container ">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
