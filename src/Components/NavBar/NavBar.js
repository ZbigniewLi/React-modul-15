import Container from '../../Components/Container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss'
import { Link  } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
        <Container className={styles.navBarInner}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
        <ul className={styles.navBarUl}> 
            
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/">Home</NavLink></li>
            
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/favorite">Favorite</NavLink></li>
           
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/about">About</NavLink></li>
        </ul>
        </Container>
      </nav>
    );
  };

 export default NavBar; 

