import React, { Component } from "react";
import {
  List,
  ListItem,
  Divider,
  Box,
  // Table,
  // TableRow,
  // TableCell,
  Typography,
  Button
  // Grid
} from "@material-ui/core";
import SelectQtd from "../SelectQtd";
import AddPedido from "../AddPedido";
// // import Store from '../../../stores/Store';
// import Actions from "../../../actions/Actions";

export class DonutItem extends Component {
  handleAddPedido = () => {
    const data = {
      preco: this.props.preco,
      sabor: this.props.sabor,
      qtd: this.state.qtd 
    };

    this.props.addToShop(data);

  };

  handleSelQtd = (value) => {
    this.setState({ qtd: value});
  }


  render() {
    return (
      <div class='row'>
        <Divider></Divider>
        <List style={{ display: "flex" }}>
          <ListItem style={{ padding: 0 }}>
            <Button>
              <img
                style={{ flex: "2" }}
                height="150px"
                alt="imgs"
                src="https://media.istockphoto.com/photos/donut-with-sprinkles-isolated-picture-id538335769"
              ></img>
            </Button>

            <Typography style={typoStyle}>{this.props.donut.sabor}</Typography>

            {/* <Typography style={typoStyle}>
              {this.props.donut.descricao}
            </Typography> */}
            <Divider orientation="vertical"></Divider>

            <Typography style={typoStyle}>
              {" "}
              R$ {this.props.donut.preco}
            </Typography>
            <Divider orientation="vertical"></Divider>

            <SelectQtd onSelQtd={this.handleSelQtd}></SelectQtd>
            <AddPedido onAddPedido={this.handleAddPedido}></AddPedido>
          </ListItem>
        </List>
        {/* </Grid> */}
      </div>
    );
  }
}

export default DonutItem;

const typoStyle = {
  flex: "1",
  textAlign: "center",
  fontSize: "20px"
  // fontFamily: "Georgia, serif
};
