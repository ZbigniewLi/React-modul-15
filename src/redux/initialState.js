const initialState = {
    columns: [
      {
        id: '1',
        title: 'Books',
        icon: 'book',
        listId: '1',
      },
      {
        id: '2',
        title: 'Movies',
        icon: 'film',
        listId: '1',
      },
      {
        id: '3',
        title: 'Games',
        icon: 'gamepad',
        listId: '1',
      }
    ],
  
    cards: [
      { id: '1', columnId: '1', title: 'This is Going to Hurt', isFavorite: 'true' },
      { id: '2', columnId: '1', title: 'Interpreter of Maladies', isFavorite: 'true' },
      { id: '3', columnId: '2', title: 'Harry Potter', isFavorite: 'true' },
      { id: '4', columnId: '2', title: 'Star Wars', isFavorite: 'true' },
      { id: '5', columnId: '3', title: 'The Witcher', isFavorite: 'true' },
      { id: '6', columnId: '3', title: 'Skyrim', isFavorite: 'true' }
    ],

    searchString: '',

    lists: [
        {
          id: '1',
          title: 'Things to do...',
          description: 'Interesting things I want to check out'
        },
       {
          id: '2',
          title: 'Test list',
          description: 'Lorem Ipsum'
       }
     ]
  
  };
  
  export default initialState;