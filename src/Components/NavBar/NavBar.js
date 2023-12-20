import Container from '../../Components/Container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
        <Container className={styles.left}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
          <ul className={styles.right}>
            <li><a href="/">Home</a></li>
            <li><a href="/favorite">Favorite</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </Container>
      </nav>
    );
  };

 export default NavBar; 

