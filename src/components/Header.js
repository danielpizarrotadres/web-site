import classes from './Header.module.css';
import logo from '../assets/logo.jpeg';
import Navigation from './Navigation';

const Header = () => {

    return (
        <header className={classes.Header}>
            <img alt='Logo' src={logo} className={classes.Logo} />
            <Navigation />
        </header>
    );
}

export default Header;
