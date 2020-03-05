import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ava1 from "../src/assets/download (7).jfif";
import ava2 from "../src/assets/download (8).jfif";
import ava3 from "../src/assets/images (1).jfif";

function App() {
  return (
    <div className="container">
      <div className="row ">
        <div
          id="header"
          className="col"
          style={{
            background: "#DCDCDC",
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
          <div className="row">
            <div id="submenu" className="col-sm-1 col-md-12">
              Home
            </div>
            <div id="submenu" className="col-sm-1 col-md-12">
              About
            </div>
            <div id="submenu" className="col-sm-1 col-md-12">
              Contact
            </div>
          </div>
        </div>
        <div
          className="col-xl-10 col-lg-10 col-md-10 col-sm-12"
          style={{
            background: "#708090",
            alignContent: "center",
            paddingLeft: "50px"
          }}
        >
          <div
            className="row"
            style={{ padding: "5px", height: "100%", width: "100%" }}
          >
            <div
              id="content1"
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded"
            >
              <h5>Who We Are</h5> The clinical development of drugs and devices
              is crucial for human welfare. Our mission is to improve success
              rates in this endeavor. We do this by improving the design and
              implementation of clinical trials through the innovative
              application of statistical science, operations research, and
              information technology.
            </div>
            <div
              id="content2"
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded"
            >
              <h5>Our Values and Beliefs</h5> We value excellence in
              implementation, with an emphasis on obtaining the maximum useful
              information for the money spent and enabling the best decisions to
              be made about the candidate drug or device.
            </div>
            <div
              id="content3"
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded"
            >
              <h5>What We Do</h5> We provide unrivaled biostatistics and
              operations research knowledge to our customers. Our knowledge is
              available in the form of both software and services. This
              knowledge, supported by our trial implementation capabilities, is
              what makes us different. We are leaders in the design and
              implementation of adaptive clinical trials.
            </div>
          </div>
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
