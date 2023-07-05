import "./App.css";
import Axios from "axios";
import { useState } from "react";
function App() {
  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    Axios.get("http://localhost:3001/products")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log("Error getting", err);
      });
  };

  const deleteProducts = (id) => {
    Axios.delete(`http://localhost:3001/products/${id}`)
      .then((res) => {
        setProductList(productList.filter((product) => product._id !== id));
      })
      .catch((error) => {
        console.log("Error deleting product:", error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            ANIMAL PED
          </text>
        </svg>

        <svg className="second">
          <text
            className="second"
            x="50%"
            y="50%"
            dy=".35em"
            text-anchor="middle"
          >
            EXPLORE, ANIMAL FUNNY STYLE
          </text>
        </svg>
      </div>
      <div
        className="App"
        style={{
          maxWidth: "1280px",
          color: "#fff",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <div className="fiveth-button" onClick={() => getProducts()}>
          <p>Products</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {productList.map((product, key) => {
            return (
              <div
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <span style={{ display: "flex", gap: "1rem" }}>
                  <p>Name:</p>
                  <p style={{ color: "orange" }}>{product.name}</p>
                </span>

                <span style={{ display: "flex", gap: "1rem" }}>
                  <p>Quantity:</p>
                  <p style={{ color: "orange" }}>{product.quantity}</p>
                </span>

                <span style={{ display: "flex", gap: "1rem" }}>
                  <p>Price:</p>
                  <p style={{ color: "orange" }}>{product.price}</p>
                </span>

                <span
                  style={{ display: "flex", gap: "1rem", marginTop: "16px" }}
                >
                  <p>Image:</p>
                  <img
                    src={product.image}
                    alt="Monkey"
                    width="100"
                    height="100"
                  />
                </span>
                <div
                  className="fourth-button"
                  onClick={() => deleteProducts(product._id)}
                >
                  <p>Delete {product.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
