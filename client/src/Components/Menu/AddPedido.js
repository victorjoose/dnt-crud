import React, { Component } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';


export class AddPedido extends Component {

    handleAddShop = () => {
        this.props.onAddPedido();
    }


    render() {
        return (
            <div >
                <Button onClick={this.handleAddShop} style={{float: 'right'}}>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </Button>
            </div>
        )
    }
}

export default AddPedido
