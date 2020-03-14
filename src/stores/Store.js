import BaseStore from './BaseStore';
import ActionTypes from '../ActionTypes';

class Store extends BaseStore {
  constructor() {
    super();
    this.subscribe(() => this.registerToActions.bind(this));
    
    this.donutsData = null;
    
  }

  setDonutsData(data) {
    this.donutsData = data;
  }

  getDonutsData() {
    return this.donutsData;
  }

 

  registerToActions(action) {
    switch (action.type) {
      case ActionTypes.GET_DONUTS_FROM_DB:
        this.setDonutsData(action.data);
        this.emitChange();
        break;
      
      default: break;
    }
  }
}

export default new Store();