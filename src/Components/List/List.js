import styles from './List.module.scss';
import Column from '../Column/Column';
import { useState } from 'react';
//import { useEffect } from 'react';
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';


const List = () => {

    const addCard = (newCard, columnId) => {
        const columnsUpdated = columns.map(column => {
            if(column.id === columnId)
                return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
            else
                return column
        })
    
        setColumns(columnsUpdated);
    
    };

    const [columns, setColumns] = useState([
        {
            id: 1,
            title: 'Books',
            icon: 'book',
            cards: [
                { id: 1, title: 'This is Going to Hurt' },
                { id: 2, title: 'Interpreter of Maladies' }
            ]
        },
        {
            id: 2,
            title: 'Movies',
            icon: 'film',
            cards: [
                { id: 1, title: 'Harry Potter' },
                { id: 2, title: 'Star Wars' }
            ]
        },
        {
            id: 3,
            title: 'Games',
            icon: 'gamepad',
            cards: [
                { id: 1, title: 'The Witcher' },
                { id: 2, title: 'Skyrim' }
            ]
        }
    ]);

    /*const [columns, setColumns] = useState([
        { id: 1, title: 'Books', icon: 'book' },
        { id: 2, title: 'Movies', icon: 'film' },
        { id: 3, title: 'Games', icon: 'gamepad' }
    ]);*/



    const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
    };
   
    /*const addColumn = newColumn => {
		setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon }]);
    };

    /*const addColumn = newColumn => {
		setColumns([...columns, { id: shortid(), title: newColumn.title }]);
    };

    /*const handleSubmit = e => {
        e.preventDefault();
        setColumns([...columns, { id: shortid(), title: value }]);
        setValue('');
    }; 

    //const [value, setValue] = useState('');

  	/*useEffect(() => {

        	setTimeout(() => {
          		setColumns([...columns, { id: 4, title: 'Test column'}]);
        	}, 2000);

  	}, []); */

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon!</span></h1>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} id={column.id} title={column.title} icon={column.icon} cards={column.cards} addCard={addCard} />)}
            </section>
            <ColumnForm action={addColumn} />

        </div>
    );  
  
};

  export default List;

  /*section className={styles.columns}>
  <Column title="Books" icon="book" />
  <Column title="Movies" icon="film" />
  <Column title="Games" icon= "gamepad"/>
</section>*/