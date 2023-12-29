/*import styles from './Card.module.scss';

const Card = props => {
    return (
        <li className={styles.card}>{props.title}</li>
    );
};

export default Card; */

import { useState } from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import { removeCard } from '../../redux/store';

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
