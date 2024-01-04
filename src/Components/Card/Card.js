import clsx from 'clsx';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardRedux';
import { removeCard } from '../../redux/cardRedux';

const Card = props => {
    const { title, id, isFavorite } = props;


    const dispatch = useDispatch()
     const toggleFavorite =() => {
        dispatch(toggleCardFavorite(id))
     }
    
    const deleteCard =() => {
        dispatch(removeCard(id))
    }

    return (
        <li className={styles.card}>
            <div>{title}</div>
            <div>
            <button onClick={toggleFavorite}>
                {isFavorite ? <span className={clsx(styles.starGold, 'fa-star-o fa')}></span>:<span className='fa-star-o fa'></span>}
            </button>
            <button  onClick={deleteCard}>
                <span className= 'fa-trash fa'> </span>
            </button>
            </div>
        </li>
    );
};

export default Card;
