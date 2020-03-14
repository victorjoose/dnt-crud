import React, { Component } from "react";
import {
  Table,
  TableRow,
  TableCell,
  Typography,
  Drawer
} from "@material-ui/core";
import Store from "../../stores/Store";
import Actions from "../../actions/Actions";
import DonutItem from "./donuts/DonutItem";
import { Link } from "react-router-dom";

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
          <Typography variant="h2">Cardápio</Typography>

          <Link to="/">
            <Typography>Home</Typography>
          </Link>
        </header>
        <Drawer variant="permanent" anchor="left"></Drawer>

        {this.state.donuts.map(donut => (
          <DonutItem donut={donut}></DonutItem>
        ))}
      </div>
    );
  }
}

export default Menu;

const headerStyle = {
  backgroundColor: "#112788",
  padding: "20px",
  textAlign: "center",
  color: "white",
  margin: "auto"
};
