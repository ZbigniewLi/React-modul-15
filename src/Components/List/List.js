import styles from './List.module.scss';
import Column from '../Column/Column';
//import { useState } from 'react';
//import { useEffect } from 'react';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/listRedux';
import { getColumnsByList } from '../../redux/columnRedux';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';



const List = () => {

    //const listId = 1;
    const { listId } = useParams();

    //const columns = useSelector(getColumns);
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsByList(state, listId));



    /*  const addCard = (newCard, columnId) => {
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



    /*const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
    };
   */
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

        if(!listData) return <Navigate to="/" />
  
    return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
          <SearchForm />
          <section className={styles.columns}>
            {columns.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
           
          </section>
          <ColumnForm listId={listId}/>
        </div>
        //<SearchForm />
    );
};

export default List;

/*section className={styles.columns}>
<Column title="Books" icon="book" />
<Column title="Movies" icon="film" />
<Column title="Games" icon= "gamepad"/>
</section>*/