import { dispatch } from '../AppDispatcher';
import ActionTypes from '../ActionTypes';
import axios from 'axios';


class Actions {
    // GET, POST, REMOVE, PUT -  TIPOS =====================================
  
   
  
    
  
    getDonutsFromDb() {
      ////modified
      axios
        .get('https://dntstationjlle-server.herokuapp.com/donut/')
        .then(res => {
          dispatch(ActionTypes.GET_DONUTS_FROM_DB, res);
        })
        .catch(err => console.log(err));
    }
  
    
  
  
}
   
  export default new Actions();