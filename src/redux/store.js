import { createStore } from 'redux';
//import shortid from 'shortid'
import initialState from './initialState';

//selectors
export const getFilteredCards = (state, columnId) => state.cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));

  export const getColumns =(state) => state.columns;

  // action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload });
export const updateSearchstring = payload=> ({type: 'UPDATE_SEARCHSTRING', payload });

  const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return { ...state, columns: [...state.columns, { ...action.payload, id: 'shortid' }]};
      case 'UPDATE_SEARCHSTRING':
        return {
            ...state,
            searchString: action.payload,
        };
        case 'ADD_CARD':
            return {...state, cards: [...state.cards, {...action.payload, id: 'shortid' }]};
        default:
        return state;
    }
  };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;