import React from 'react';
import Store from '../../stores/Store';
import Actions from '../../actions/Actions';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem, TextField } from '@material-ui/core';
import AddPedido from './AddPedido';

export default function SelectQtd(props) {
  const [qtdValor, setQtdValor] = React.useState(0);
//   const [contatos, setContatos] = React.useState([]);

//   React.useEffect(() => {
//     Store.addChangeListener(onChange);
//     // Actions.getChamadosFromDb();
//     return () => {
//       Store.removeChangeListener(onChange);
//     };
//   }, []);

//   const onChange = () => {
//     const dataFromStore = Store.getChamadosData();
//     setContatos(dataFromStore || []);
//   };

  const handleChange = event => {
    // props.onChangeQtd(event.target.value);
    props.onSelQtd(event.target.value);
    setQtdValor(event.target.value);
  };

  return (
    <div >
      
      <InputLabel>Quantidade</InputLabel>
      <TextField        

        value={qtdValor}
        onChange={handleChange}
        variant='standard'
        type='number'
        size='medium'
        // style={{width: '100%'}}
        
      >
      </TextField>
    </div>
  );
}