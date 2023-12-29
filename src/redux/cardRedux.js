import shortid from 'shortid'

//selectors
export const getFilteredCards = (state, columnId) => state.cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE')


//action creators 
export const addCard = payload => ({type: ADD_CARD, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload});
export const toggleCardFavorite = cardId => ({type: TOGGLE_CARD_FAVORITE, payload: cardId,});
export const getFavoriteCards = state => {
    return state.cards.filter(card => card.isFavorite);
};


const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_CARD':
        return [...statePart, { ...action.payload, id: shortid() }];
      case 'TOGGLE_CARD_FAVORITE':
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
    }
  }

  export default cardsReducer;