import { useState } from 'react';
import classes from './MobileNavigation.module.css';
import { IoMdClose } from "react-icons/io";
const MobileNavigation = (props) => {
    const [items] = useState([
        {
            index: 0,
            name: 'About',
            selected: true
        },
        {
            index: 1,
            name: 'Articles',
            selected: false
        },
        {
            index: 2,
            name: 'Projects',
            selected: false
        }
    ]);

    const onClick = ({ index }) => {
        props.onData(index);
    }

    const mobileNavigationItems = () => {
        return <ul>
            {items.map((item) =>
                <li key={item.index} className={classes.MobileNavigationActiveItem} onClick={() => onClick(item)}>
                    <a> {item.name} </a>
                </li>
            )}
        </ul>
    }

    return (
        <nav className={classes.MobileNav}>
            <div className={classes.NavMenu}>
                <div className={classes.MobileNavigationHeader}>
                    <h2>Navigation</h2> <IoMdClose className={classes.Closing} />
                </div>
                <section className={classes.MobileNavigationItems}>
                    <ul> {mobileNavigationItems()} </ul>
                </section>
            </div>
        </nav>
    );
}

export default MobileNavigation;
