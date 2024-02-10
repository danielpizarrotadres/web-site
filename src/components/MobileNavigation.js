// TODO:

// 1- Add MobileNavigation component, keeping the toggle state in App.js
// 2- Add Navigation component (for desktop)

import React, { useEffect, useState } from 'react';
import classes from './MobileNavigation.module.css';
import { IoMdClose } from 'react-icons/io';
import locales from '../locales/en.json'

export const MobileNavigation = () => {
    const { navigation } = locales;

    useEffect(() => {
        // Implement
    }, []);

    const closeMobileNavigation = (data = null) => {
        console.log('closeMobileNavigation' + data);
    }

    const onPressItemNavigation = (data = null) => {
        console.log('closeMobileNavigation' + data);
    }

    return (
        <nav className={classes.MobileNav}>
            <div className={classes.NavMenu}>
                <div className={classes.MobileNavigationHeader}>
                    <h2>Navigation</h2>
                    <IoMdClose className={classes.Closing} onClick={closeMobileNavigation} />
                </div>
                <section className={classes.MobileNavigationItems}>
                    <ul>
                        {navigation.items.map(({ label, id }) =>
                            <li
                                key={id}
                                className={classes.MobileNavigationActiveItem}
                                onClick={() => onPressItemNavigation(label)}
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