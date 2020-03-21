import React from "react";
import Store from "../../stores/Store";
import Actions from "../../actions/Actions";
import InputLabel from "@material-ui/core/InputLabel";
import { MenuItem, TextField } from "@material-ui/core";
import AddPedido from "./AddPedido";

export default function SelectQtd(props) {
  const [qtdValor, setQtdValor] = React.useState("");
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

  const handleChange = (event) => {
    // props.onChangeQtd(event.target.value);
    if (event.target.value > 0) {
      props.onSelQtd(event.target.value);
      setQtdValor(event.target.value);
    } else {
      props.onSelQtd(1);
      setQtdValor(1);
    }
  };

  return (
    <div>
      <InputLabel>Quantidade</InputLabel>
      <TextField
        value={qtdValor}
        onChange={handleChange}
        variant="standard"
        type="number"
        size="medium"
        // style={{width: '100%'}}
      ></TextField>
    </div>
  );
}
