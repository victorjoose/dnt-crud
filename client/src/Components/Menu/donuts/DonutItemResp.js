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
  onAddPedido = () => {};

  render() {
    return (
      <div class="row align-items-center">
        <div class="col-md-3">
          <Button>
            <img
            //   style={{ flex: "2" }}
              height="120vh"
              alt="imgs"
              src="https://media.istockphoto.com/photos/donut-with-sprinkles-isolated-picture-id538335769"
            ></img>
          </Button>
        </div>

        <div class="col-md-3">
          <Typography style={typoStyle}>{this.props.donut.sabor}</Typography>
        </div>

        <div class="col-md-3">
          <Typography style={typoStyle}>R$ {this.props.donut.preco}</Typography>
        </div>

        <div class='col-md-2'>
          <SelectQtd></SelectQtd>
        </div>

        <div class='col-md-1'>
            <AddPedido onAddPedido={this.handleAddPedido}></AddPedido>
        </div>
      </div>
    );
  }
}

export default DonutItem;

const typoStyle = {
  //   flex: "1",
  textAlign: "center",
  fontSize: "20px"
  // fontFamily: "Georgia, serif
};
