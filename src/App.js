import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ava1 from "../src/assets/download.png";
import ava2 from "../src/assets/images.jfif";
import ava3 from "../src/assets/images.png";

function App() {
  return (
    <div className="container">
      <div className="row ">
        <div
          id="header"
          className="col"
          style={{
            background: "#FFFACD",
            height: "100px",
            textAlign: "center",
            verticalAlign: "center"
          }}
        >
          <h4>Cytel</h4>
        </div>
      </div>
      <div id="Content" className="row" style={{ minHeight: "440px" }}>
        <div
          id="sider"
          className="col-xl-2 col-lg-2 col-md-2 col-sm-12"
          style={{ background: "#B0C4DE" }}
        >
          Sider
        </div>
        <div
          className="col-xl-10 col-lg-10 col-md-10 col-sm-12"
          style={{ background: "#E6E6FA" }}
        >
          Content
        </div>
      </div>
      <div className="row">
        <div
          className="col"
          style={{ background: "orange", minHeight: "50px" }}
        >
          <div className="row" style={{ height: "100%" }}>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              style={{
                background: "#C0C0C0",
                alignContent: "center",
                textAlign: "center"
              }}
            >
              <img src={ava1} alt="Avatar" style={{ margin: "10px" }}></img>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              style={{ background: "#C0C0C0", textAlign: "center" }}
            >
              <img src={ava2} alt="Avatar" style={{ margin: "10px" }}></img>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              style={{ background: "#C0C0C0", textAlign: "center" }}
            >
              <img src={ava3} alt="Avatar" style={{ margin: "10px" }}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
