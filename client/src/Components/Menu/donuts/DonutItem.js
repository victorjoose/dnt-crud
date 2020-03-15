import React, { Component } from "react";
import {
  List,
  ListItem,
  // Box,
  // Table,
  // TableRow,
  // TableCell,
  Typography,
  Button,
  // Grid
} from "@material-ui/core";
// // import Store from '../../../stores/Store';
// import Actions from "../../../actions/Actions";

export class DonutItem extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem>
            <Button>
              <img
                height="200px"
                alt="imgs"
                src="https://media.istockphoto.com/photos/donut-with-sprinkles-isolated-picture-id538335769"
              ></img>
            </Button>
            <Typography style={{ flex: "3" }}>
              Sabor: {this.props.donut.sabor}
            </Typography>

            <Typography style={{ flex: "3" }}>
              Descrição: {this.props.donut.descricao}
            </Typography>

            <Typography style={{ flex: "3" }}>
              Preço: {this.props.donut.preco}
            </Typography>

          </ListItem>
        </List>
        {/* </Grid> */}
      </div>
    );
  }
}

export default DonutItem;
