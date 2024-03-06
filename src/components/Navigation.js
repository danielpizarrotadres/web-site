import { useState } from 'react';
import classes from './Navigation.module.css';
import { IoIosArrowDown } from 'react-icons/io';

const Navigation = () => {
    // TODO: Pass to store
    const [toggle, setToggle] = useState({
        iconClass: classes.ArrowIcon,
        show: false,
    });

    const onClick = () => {
        setToggle({
            show: !toggle.show,
            iconClass: toggle.iconClass.includes('Clicked') ? classes.ArrowIcon : classes.ClickedArrowIcon,
        });
    };

    const mobileNavigationItems = () => {
        return <button id='toggle' className={classes.Toggle} onClick={onClick}>
            Menu <IoIosArrowDown className={toggle.iconClass} />
        </button>;
    }

    return (
        mobileNavigationItems()
    );
}

export default Navigation;
