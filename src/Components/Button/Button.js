import styles from './Button.module.scss';


/*const Button = props => {
    return <Button className={styles.Button} placeholder={props.placeholder} type="text" />
} */

const Button = props => {
    return (<button className={styles.button}>{props.children}</button>);
};

export default Button;