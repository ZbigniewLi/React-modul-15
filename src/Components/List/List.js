import styles from './List.module.scss';
import Column from '../Column/Column';
import icon from '../Column/Column.module.scss'

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon!</span></h1>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <Column title="Books" icon="books" />
                <Column title="Movies" icon="film" />
                <Column title="Games" icon= "gamepad"/>
            </section>
        </div>
      
    );  
};

  export default List;
