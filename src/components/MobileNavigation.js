// TODO:

// 1- Add MobileNavigation component, keeping the toggle state in App.js
// 2- Add Navigation component (for desktop)

import React, { useEffect, useState } from 'react';
import classes from './MobileNavigation.module.css';
import { IoMdClose } from "react-icons/io";

export const MobileNavigation = () => {
    const [items, setItems] = useState([
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

    useEffect(() => {
        // Implement
    }, []);

    const handleOnClick = (data = null) => {
        console.log('handleOnClick' + data);
    }

    return (
        <nav className={classes.MobileNav}>
            <div className={classes.NavMenu}>
                <div className={classes.MobileNavigationHeader}>
                    <h2>Navigation</h2>
                    <IoMdClose className={classes.Closing} onClick={handleOnClick} />
                </div>
                <section className={classes.MobileNavigationItems}>
                    <ul>
                        {items.map((item) =>
                            <li
                                key={item.index}
                                className={classes.MobileNavigationActiveItem}
                                onClick={() => handleOnClick(item)}
                            >
                                <a>
                                    {item.name}
                                </a>
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        </nav>
    );
}