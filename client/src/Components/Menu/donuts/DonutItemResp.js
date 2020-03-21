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

export class DonutItemResp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: true
    };
  }

  handleAddPedido = () => {
    const data = {
      preco: this.props.donut.preco,
      sabor: this.props.donut.sabor,
      qtd: this.state.qtd
    };

    this.props.addToShop(data);
  };

  handleSelQtd = (value) => {
    this.setState({ qtd: value });
    if (value !== 0) this.setState({ showAdd: false });
  };

  render() {
    // this.setState({ value: false });

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

        <div class="col-md-2">
          <SelectQtd onSelQtd={this.handleSelQtd}></SelectQtd>
        </div>

        <div class="col-md-1">
          <AddPedido
            showAdd={this.state.showAdd}
            onAddPedido={this.handleAddPedido}
          ></AddPedido>
        </div>
      </div>
    );
  }
}

export default DonutItemResp;

const typoStyle = {
  //   flex: "1",
  textAlign: "center",
  fontSize: "20px"
  // fontFamily: "Georgia, serif
};
