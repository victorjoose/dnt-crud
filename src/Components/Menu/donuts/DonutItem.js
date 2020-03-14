import React, { Component } from "react";
import {
  Table,
  TableRow,
  TableCell,
  Typography,
  Button
} from "@material-ui/core";
// // import Store from '../../../stores/Store';
// import Actions from "../../../actions/Actions";

export class DonutItem extends Component {
  render() {
    return (
      <div>
        <TableRow style={{ display: "flex", marginTop: "10px" }}>
          <div style={{ flex: "4" }}></div>
          <TableCell style={cellStyle}>
            <Button>
              <img
                height='200px'
                alt="imgs"
                src="https://media.istockphoto.com/photos/donut-with-sprinkles-isolated-picture-id538335769"
              ></img>
            </Button>
            <Typography>
              {/* <Typography variant="h6">Sabor:</Typography>{" "} */}
              <Typography variant="h6">
                {" "}
                Sabor: {this.props.donut.sabor}
              </Typography>
              <Typography variant="h6">
                {" "}
                Descrição: {this.props.donut.descricao}
              </Typography>
              <Typography variant="h6">
                {" "}
                Preço: {this.props.donut.preco}
              </Typography>
            </Typography>
          </TableCell>
          <div style={{ flex: "10" }}></div>
        </TableRow>
      </div>
    );
  }
}

export default DonutItem;

const cellStyle = {
  // textAlign: "center",
  // margin: '0px',
  flex: '0',
  width: "50%"
};
