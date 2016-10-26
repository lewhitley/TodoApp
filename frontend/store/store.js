import {createStore} from 'redux';
import RootReducer from '../reducers/root_reducer';

import MasterMiddleware from '../middleware/master_middleware';

const defaultState = { todos: {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }}
};

const configureStore =  () => createStore(RootReducer,
                                          defaultState,
                                          MasterMiddleware);

export default configureStore;
