import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ava1 from "../src/assets/download (7).jfif";
import ava2 from "../src/assets/download (8).jfif";
import ava3 from "../src/assets/images (1).jfif";
import { Provider, LOCALES } from "../src/locale/injex";
import { FormattedMessage } from "react-intl";

const App = () => {
  const [language, setLanguage] = useState(LOCALES.english);
  return (
    <Provider locale={language}>
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
            <div id="lang">
              <button
                onClick={() => {
                  setLanguage(LOCALES.english);
                }}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage(LOCALES.french);
                }}
              >
                French
              </button>
            </div>
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
                <FormattedMessage id="Home"></FormattedMessage>
              </div>
              <div id="submenu" className="col-sm-1 col-md-12">
                <FormattedMessage id="About"></FormattedMessage>
              </div>
              <div id="submenu" className="col-sm-1 col-md-12">
                <FormattedMessage id="Contact"></FormattedMessage>
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
                <h5>
                  <FormattedMessage id="WhoWeAre"></FormattedMessage>
                </h5>
                <FormattedMessage id="WhoWeAreDesc"></FormattedMessage>
              </div>
              <div
                id="content2"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded"
              >
                <h5>
                  <FormattedMessage id="OurValuesandBeliefs"></FormattedMessage>
                </h5>
                <FormattedMessage id="OurValuesandBeliefsDesc"></FormattedMessage>
              </div>
              <div
                id="content3"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded"
              >
                <h5>
                  <FormattedMessage id="WhatWeDo"></FormattedMessage>
                </h5>
                <FormattedMessage id="WhatWeDoDesc"></FormattedMessage>
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
    </Provider>
  );
};

export default App;
