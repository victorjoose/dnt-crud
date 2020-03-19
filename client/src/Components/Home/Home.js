import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logo from "../Menu/logo.png";

export class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#fcd1ef",
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%"
        }}
      >
      <header style={headerStyle}>
        
      </header>
        <Link style={linkStyle} to="/menuresp">
          <img
            style={{
              maxWidth: "100%",
              position: "absolute",
              margin: "auto",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0"
            }}
            alt="logo"
            src={logo}
            height="300px"
          ></img>
        </Link>


     
      </div>
    );
  }
}

export default Home;

const headerStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#172e99",
  color: "blue",

};

const linkStyle = {
  padding: "10px"
};
