import React, { Component } from "react";
import { Table, TableRow, TableCell, Typography } from "@material-ui/core";
import Store from "../../stores/Store";
import Actions from "../../actions/Actions";
import DonutItem from './donuts/DonutItem';
// import Drawer from '@material-ui/core/Drawer';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donuts: [],
      bagels: []
    };
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    Actions.getDonutsFromDb();
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromStore = Store.getDonutsData();
    this.setState({ donuts: dataFromStore });
  };

  render() {
    return (
      <div>
        <header style={headerStyle}>
          <Typography variant="h2">Escolha seus donuts</Typography>
        </header>

        {this.state.donuts.map(donut => (

            <DonutItem donut={donut}></DonutItem>

          
        ))}
      </div>
    );
  }
}

export default Menu;



const headerStyle = {
  backgroundColor: "lightblue",
  padding: "20px",
  textAlign: "center"
};
