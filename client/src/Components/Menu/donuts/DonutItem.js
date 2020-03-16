import React, { Component } from "react";
import {
  List,
  ListItem,
  Divider,
  // Box,
  // Table,
  // TableRow,
  // TableCell,
  Typography,
  Button
  // Grid
} from "@material-ui/core";
import SelectQtd from "../SelectQtd";
import AddPedido from '../AddPedido';
// // import Store from '../../../stores/Store';
// import Actions from "../../../actions/Actions";

export class DonutItem extends Component {
  render() {
    return (
      <div>
        <Divider></Divider>
        <List style={{ display: "flex" }}>
          <ListItem>
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

            <Typography style={typoStyle}> R$ {this.props.donut.preco}</Typography>

            <SelectQtd></SelectQtd>

            <AddPedido></AddPedido>
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
  fontSize: "20px",
  // fontFamily: "Georgia, serif
};
