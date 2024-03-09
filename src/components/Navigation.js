import { useState, useEffect } from 'react';
import classes from './Navigation.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import useWindowSize from '../utils/hooks/useWIndowSize';

// TODO: Pass all states to store
// TODO: Pass all constant to a constant file

const Navigation = () => {
    const windowSize = useWindowSize();
    const [size, setSize] = useState('lg');
    const [toggle, setToggle] = useState({
        iconClass: classes.ArrowIcon,
        show: false,
    });
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

    useEffect(() => {
        const { width } = windowSize;
        if (width <= 768) {
            setSize('sm');
        } else {
            setSize('lg');
        }
    }, [windowSize]);

    const onClick = () => {
        setToggle({
            show: !toggle.show,
            iconClass: toggle.iconClass.includes('Clicked') ? classes.ArrowIcon : classes.ClickedArrowIcon,
        });
    };

    const navigation = () => {
        if (['sm', 'md'].includes(size)) {
            return <button id='toggle' className={classes.Toggle} onClick={onClick}>
                Menu <IoIosArrowDown className={toggle.iconClass} />
            </button>;
        } else {
            return <nav className={classes.Navigation}>
                <ul className={classes.ItemList}>
                    {items.map((item) =>
                        <li key={item.index} className={classes.Item}>
                            <a className={classes.Link}> {item.name} </a>
                        </li>
                    )}
                </ul>
            </nav>
        }
    }

    return (
        navigation()
    );
}

export default Navigation;
