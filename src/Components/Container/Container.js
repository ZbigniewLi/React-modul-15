import styles from './Container.module.scss'
import clsx from 'clsx';

const Container = (props) => {
    const { children } = props;

    return (
    <div className={clsx(styles.container, props.className)}>
        {children}
    </div>
    );
};

export default Container;