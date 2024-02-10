import React, { useEffect, useState } from 'react';
import classes from './MobileNavigation.module.css';
import { IoMdClose } from 'react-icons/io';
import locales from '../locales/en.json'

export const MobileNavigation = ({ onPress }) => {
    const { navigation: { items, title } } = locales;

    useEffect(() => {
        // Implement
    }, []);

    const closeMobileNavigation = (data = null) => {
        console.log('closeMobileNavigation' + data);
    }

    const onPressItemNavigation = (id) => {
        onPress(id);
    }

    return (
        <nav className={classes.MobileNav}>
            <div className={classes.NavMenu}>
                <div className={classes.MobileNavigationHeader}>
                    <h2>{title}</h2>
                    <IoMdClose className={classes.Closing} onClick={closeMobileNavigation} />
                </div>
                <section className={classes.MobileNavigationItems}>
                    <ul>
                        {items.map(({ label, id }) =>
                            <li
                                key={id}
                                className={classes.MobileNavigationActiveItem}
                                onClick={() => onPressItemNavigation(id)}
                            >
                                <a>
                                    {label}
                                </a>
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        </nav>
    );
}