import React, { Component } from "react";
import {
  Button,
  Divider,
  List,
  ListItem,
  MenuItem,
  Box,
  // Table,
  // TableRow,
  // TableCell,
  Typography,
  Drawer,
  Select,
  Container
} from "@material-ui/core";
import Store from "../../stores/Store";
import Actions from "../../actions/Actions";
import DonutItem from "./donuts/DonutItem";
// import { Link } from "react-router-dom"
import DrawerMenu from "./DrawerMenu";
import { Layout } from "antd";
// import { Menu } from "antd";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const { Sider, Content } = Layout;
export class MenuCardapioResp extends Component {
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
      <div class="container-fluid" style={{ padding: 0 }}>
        <div class="row no-gutters"></div>
        <div class="row no-gutters">
          <div
            class="col-1"
            style={{ backgroundColor: "red" }}
          >
            <img alt="logo" src={logo} height="150vh"></img>

            <div class="row justify-content-center">
              <div class="col">
                <Link to="/">
                  <HomeIcon></HomeIcon>
                </Link>
              </div>
            </div>
          </div>

          <div class="col" style={{ backgroundColor: "green" }}>
            Content
          </div>

          <div class="col-sm-3" style={{ backgroundColor: "yellow" }}>
            Carrinho
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCardapioResp;
