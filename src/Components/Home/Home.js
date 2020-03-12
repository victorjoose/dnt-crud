import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1> Donut Station </h1>
        </header>
      </div>
    );
  }
}

export default Home;

const headerStyle = {
  textAlign: 'center',
  padding: '60px',
  backgroundColor: 'pink',
  color: 'blue'
};
