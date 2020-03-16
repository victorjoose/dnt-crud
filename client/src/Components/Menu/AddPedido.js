import React, { Component } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';


export class AddPedido extends Component {
    render() {
        return (
            <div >
                <Button style={{float: 'right'}}>
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                </Button>
            </div>
        )
    }
}

export default AddPedido
