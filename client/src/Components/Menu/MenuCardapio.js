import React, { Component } from "react";
import {
  Divider,
  List,
  ListItem,
  MenuItem,
  Box,
  // Table,
  // TableRow,
  // TableCell,
  Typography,
  // Drawer,
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

const { Sider, Content } = Layout;

// import Drawer from '@material-ui/core/Drawer';

export class MenuCardapio extends Component {
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
      // <div class='container-md'>
        <div
          // class="col-8 offset-sm-2"
          style={{
            backgroundColor: "#fcd1ef",
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          }}
        >
          <Layout style={{ backgroundColor: "#172E99" }}>
            {/* <Header style={headerStyle}>
            <Typography variant="h2">Cardápio</Typography>
            <Link to="/">
              <Typography>Home</Typography>
            </Link>
          </Header> */}
            <Layout style={{ backgroundColor: "#172E99" }}>
              <Sider style={{ backgroudColor: "red" }}>
                <DrawerMenu></DrawerMenu>
              </Sider>
              {/* <Sider style={{backgroundColor: 'red'}}>
              <Menu mode="inline">
                <Menu.Item key="5">Option 5</Menu.Item>
              </Menu>

              </Sider> */}
              <Content style={{ display: "flex" }}>
                {/* <Container
                fixed
                style={{
                  flex: "1.5",
                  backgroundColor: "white",
                  border: "3px solid #E01E4B",
                  borderRadius: "5px 5px"
                  // marginRight: "100px"
                }}
              >
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="logo"
                  src={logo}
                  height="300px"
                ></img>
                <Divider></Divider>
              </Container> */}
                {/* <div style={{ flex: "4" }}></div> */}
                <Container
                  maxWidth="md"
                  style={{
                    width: "100%",
                    height: "100%",
                    // overflow: 'hidden',
                    marginLeft: "200px",
                    backgroundColor: "white",
                    marginTop: "50px",
                    marginBottom: "50px",
                    border: "10px solid #f9c56b",
                    borderRadius: "5px 5px",
                    padding: "10px"
                  }}
                >
                  <Link to="/">
                    <Typography>Home</Typography>
                  </Link>
                  {/* <Box> */}
                  <List style={{ display: "flex" }}>
                    <ListItem>
                      <Select
                        style={{ flex: 0, textAlign: "center" }}
                        value="Donuts"
                      >
                        <MenuItem value="Homer">Donuts</MenuItem>
                        <MenuItem value="Branco">Bagels</MenuItem>
                      </Select>
                      {/* <Typography
                        style={{ flex: '3', textAlign: 'center'}}
                        variant="h5"
                      >
                        Sabor
                      </Typography>
                      <Typography
                        style={{ flex: '3', textAlign: 'center'}}
                        variant="h5"
                      >
                        Descrição
                      </Typography>
                      <Typography
                        style={{ flex: '3', textAlign: 'center' }}
                        variant="h5"
                      >
                        Preço
                      </Typography>
                      <Typography
                        style={{ flex: '3', textAlign: 'center' }}
                        variant="h5"
                      >
                        Quantidade
                      </Typography> */}
                    </ListItem>
                  </List>

                  {this.state.donuts.map(donut => [
                    <DonutItem donut={donut}></DonutItem>,
                    <Divider style={{ backgroudColor: "black" }} />
                  ])}
                  {/* </Box> */}
                </Container>
                {/* <Sider style={{ backgroundColor: "#172E99" }}> */}
                {/* <Container
                  style={{
                    height: "50vh",
                    backgroundColor: "white",
                    marginLeft: "50px",
                    marginTop: "50px",
                    marginBottom: "50px",
                    border: "10px solid #f9c56b",
                    borderRadius: "5px 5px",
                    width: "40vh"
                  }}
                >
                </Container> */}
                {/* </Sider> */}
                {/* <div style={{ flex: "4" }}></div> */}
              </Content>
            </Layout>
          </Layout>
        </div>
      // </div>
    );
  }
}

export default MenuCardapio;

// const headerStyle = {
//   backgroundColor: "#424874",
//   padding: "1px",
//   textAlign: "center",
//   color: "#f4eeff",
//   border: "1px solid black",
//   borderRadius: "6px 6px"
// };
