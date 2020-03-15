import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#fcd1ef'}}>
        <header style={headerStyle}>
          <Typography variant="h2"> Donut Station - Home</Typography>
          <Link style={linkStyle} to="/menu">
            <Typography>Novo pedido</Typography>
          </Link>
        </header>
      </div>
    );
  }
}

export default Home;

const headerStyle = {
  textAlign: "center",
  padding: "60px",
  backgroundColor: "pink",
  color: "blue",
  border:'2px solid black',
  borderRadius: '20px 10px'
};

const linkStyle = { 
  padding: '10px'
}
