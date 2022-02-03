import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div
        className="four column wide  "
        key={id}
        style={{
          width: "250px",
          height: "300px",
          marginBottom: "20px",
          marginRight: "15px",
        }}
      >
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} style={{ height: "200px" }} />
              </div>
              <div
                className="content"
                style={{
                  width: "240px",
                  height: "100px",
                }}
              >
                <div
                  className="header"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {title}
                </div>
                <div
                  className="small"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div className="meta">{category}</div>
                  <div className="meta price">${price}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "50px",
        marginTop: "50px",
      }}
    >
      {renderList}
    </div>
  );
}

export default ProductComponent;
