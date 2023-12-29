import { createStore } from 'redux';
import shortid from 'shortid'
import initialState from './initialState';

//selectors
export const getFilteredCards = (state, columnId) => state.cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));

  export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)

  export const getColumns =(state) => state.columns;

  export const getColumnsByList = (state, listId) => {
    return state.columns.filter(column => column.listId === listId);
  };

  export const getAllLists = state => state.lists;

  // action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload });
export const updateSearchstring = payload=> ({type: 'UPDATE_SEARCHSTRING', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });

export const toggleCardFavorite = cardId => ({type: 'TOGGLE_CARD_FAVORITE', payload: cardId,});

export const getFavoriteCards = state => {
    return state.cards.filter(card => card.isFavorite);
};

export const removeCard = payload => ({ type: 'REMOVE_CARD', payload});


  const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
      case 'UPDATE_SEARCHSTRING':
        return { ...state, searchString: action.payload,};

        case 'ADD_CARD':
            return {...state, cards: [...state.cards, {...action.payload, id: shortid() }]};

        case 'ADD_LIST': 
            return {...state, lists: [...state.lists, {...action.payload, id: shortid()}]};

        case 'TOGGLE_CARD_FAVORITE':
                return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };

        case 'REMOVE_CARD':
            return {...state, cards: state.cards.filter(card => (card.id !== action.payload))};

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