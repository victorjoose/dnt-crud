import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

export class Home extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <Typography variant='h2'> Donut Station - Home</Typography>
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
  color: "blue"
};
