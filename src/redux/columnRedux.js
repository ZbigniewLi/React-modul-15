import shortid from 'shortid'

//selectors
export const getColumns =(state) => state.columns;
export const getColumnsByList = (state, listId) => {
    return state.columns.filter(column => column.listId === listId);
  };

  //actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }

  export default columnsReducer;