import initialState from './initialState';
import { createStore, combineReducers } from 'redux';
import listsReducer from './listRedux';
import columnsReducer from './columnRedux'
import cardsReducer from './cardRedux';
import searchStringReducer from './searchstringRedux'


 
  const subreducers = {
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer,
    lists: listsReducer,
  }
  
  const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

