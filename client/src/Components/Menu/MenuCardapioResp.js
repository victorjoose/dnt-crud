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
import DonutItemResp from "./donuts/DonutItemResp";
// import { Link } from "react-router-dom"
import DrawerMenu from "./DrawerMenu";
import { Layout } from "antd";
// import { Menu } from "antd";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

// const { Sider, Content } = Layout;

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
          <div class="col-1" style={{ backgroundColor: "white" }}>
            <img alt="logo" src={logo} height="150vh"></img>

            <div class="row justify-content-center">
              <div class="col">
                <Link to="/">
                  <HomeIcon></HomeIcon>
                </Link>
              </div>
            </div>
          </div>

          <div class="col" style={{ backgroundColor: "#172E99" }}>
            <Container
              maxWidth="md"
              style={{
                // width: "100%",
                height: "100%",
                // // overflow: 'hidden',
                // marginLeft: "200px",
                backgroundColor: "white",
                // marginTop: "50px",
                // marginBottom: "50px",
                border: "2px solid #f9c56b",
                // borderRadius: "5px 5px",
                padding: "10px"
              }}
            >
              <div class="row">

                <div class="col-4">
                  <Select style={{width: '70%'}}>
                    <MenuItem>Donuts</MenuItem>
                  </Select>
                </div>

                <div class='col-3'>  
                  <Typography variant='h6'>Sabor</Typography>
                </div>

                <div class='col-2'>
                  <Typography variant='h6'>Preço</Typography>
                </div>

                <div class='col-2'>
                  <Typography variant='h6'>Quantidade</Typography>
                </div>

              </div>
              <Divider style={{marginTop: '10px'}}></Divider>
              {this.state.donuts.map(donut => [
                <div class='container'>
                  <DonutItemResp donut={donut}></DonutItemResp>
                  <Divider></Divider>
                </div>
              ])}

            </Container>
          </div>

          <div class="col-sm-3" style={{ backgroundColor: "white" }}>
            Carrinho
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCardapioResp;
