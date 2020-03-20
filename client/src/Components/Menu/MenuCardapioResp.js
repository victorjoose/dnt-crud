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
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import _ from "lodash";
import { T } from "antd/lib/upload/utils";

// const { Sider, Content } = Layout;

export class MenuCardapioResp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donuts: [],
      // bagels: [],
      sabores: [],
      precos: [],
      qtds: [],
      subtots: []
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

  handleAddToShop = (data) => {
    this.setState({ sabores: _.concat(this.state.sabores, data.sabor) || [] });
    this.setState({ precos: _.concat(this.state.precos, data.preco) || [] });
    this.setState({ qtds: _.concat(this.state.qtds, data.qtd) || [] });
    // this.setState({ subtots: this.calcSubTotal() });
    this.calcSubTotal();
  };

  calcSubTotal = () => {
    for (let i = 0; i < this.state.qtds.length; i++) {
      let subtotAux = this.state.qtds[i] * this.state.precos[i];
      this.setState({ subtots: _.concat(this.state.subtots, subtotAux)  || []});
    }

    // return this.state.subtots;
  };

  render() {
    return (
      <div class="container-fluid" style={{ padding: 0 }}>
        <div class="row no-gutters"></div>
        <div class="row no-gutters">
          <div class="col-sm-1" style={{ backgroundColor: "white" }}>
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
                marginTop: "20px",
                // marginBottom: "50px",
                border: "4px solid #f9c56b"
                // borderRadius: "5px 5px",
                // padding: "100px"
              }}
            >
              <div class="row">
                <div class="col-4">
                  <Select style={{ width: "70%" }}>
                    <MenuItem>Donuts</MenuItem>
                  </Select>
                </div>

                <div class="col-3">
                  <Typography variant="h6">Sabor</Typography>
                </div>

                <div class="col-2">
                  <Typography variant="h6">Preço</Typography>
                </div>

                <div class="col-2">
                  <Typography variant="h6">Quantidade</Typography>
                </div>
              </div>
              <Divider style={{ marginTop: "10px" }}></Divider>
              {this.state.donuts.map((donut) => [
                <div class="container">
                  <DonutItemResp
                    addToShop={this.handleAddToShop}
                    donut={donut}
                  ></DonutItemResp>
                  <Divider></Divider>
                </div>
              ])}
            </Container>
          </div>

          <div class="col-lg-3" style={{ backgroundColor: "#172E99" }}>
            <Container
              maxWidth="md"
              style={{
                // width: "100%",
                // height: "100%",
                // // overflow: 'hidden',
                // marginLeft: "200px",
                backgroundColor: "white",
                marginTop: "20px",
                // marginBottom: "50px",
                border: "4px solid #f9c56b"
                // borderRadius: "5px 5px",
                // padding: "100px"
              }}
            >
              <div class="row align-items-center">
                <div class="col-4">
                  <ShoppingCartIcon
                    fontSize="large"
                    variant="outlined"
                    style={{ float: "right" }}
                  ></ShoppingCartIcon>
                </div>
                <div class="col-8">
                  <Typography variant="h4">Carrinho</Typography>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <Typography variant="h5">
                    {" "}
                    Sabores{" "}
                    {this.state.sabores.map((sabor) => [
                      <div col="row">
                        <Typography variant="h6"> {sabor} </Typography>
                      </div>
                    ])}
                  </Typography>
                </div>
                <div class="col">
                  <Typography variant="h5">
                    {" "}
                    Preços{" "}
                    {this.state.precos.map((preco) => [
                      <div col="row">
                        <Typography variant="h6"> {preco} </Typography>
                      </div>
                    ])}
                  </Typography>
                </div>
                <div class="col">
                  <Typography variant="h5">
                    {" "}
                    Qtds{" "}
                    {this.state.qtds.map((qtd) => [
                      <div col="row">
                        <Typography variant="h6"> {qtd} </Typography>
                      </div>
                    ])}
                  </Typography>
                </div>
                <div class="col">
                  <Typography variant="h5">
                    {" "}
                    Subtotal
                    {this.state.subtots.map((subtot) => [
                      <div col="row">
                        <Typography variant="h6"> {subtot} </Typography>
                      </div>
                    ])}
                  </Typography>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCardapioResp;
