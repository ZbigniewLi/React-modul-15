import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm'
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';



const Column = props => {

    console.log(props)
    //const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));
    const cards = useSelector(state => getFilteredCards(state, props.id));
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>{props.title}</h2>
            <span className={styles.icon + ' fa fa-' + props.icon} />
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} action={props.addCard} />
        </article>

    );
};

export default Column;