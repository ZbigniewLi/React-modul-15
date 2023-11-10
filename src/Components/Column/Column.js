import styles from './Column.module.scss';


const Column = props => {
    return (
    <article className={styles.column}>
        <h2 className={styles.title}>{props.title}</h2>
        <span className={styles.icon + ' fa fa-' + icon} />
    </article>
    );
};

export default Column;