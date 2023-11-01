import React, {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import classes from "../App.module.css";

const Navigation = () => {
    const [size] = useState('lg');
    const [toggle, setToggle] = useState({
        iconClass: classes.ArrowIcon,
        show: false,
    });
    const navigation = () => {
        switch (size) {
            case 'sm': // -> Small >= 576px
            case 'md': // -> Medium >= 768px
                return <React.Fragment>
                    <button
                        id="toggle"
                        className={classes.Toggle}
                    >
                        Menu
                        <IoIosArrowDown
                            className={toggle.iconClass}
                        />
                    </button>
                </React.Fragment>;
            case 'lg': // -> Large >= 992px
            case 'xl': // -> Extra Large >= 1200px
            default:
                return <React.Fragment>
                    <nav
                        className={
                            classes.Navigation
                        }
                    >
                        <ul
                            className={
                                classes.ItemList
                            }
                        >
                            <li
                                className={
                                    classes.Item
                                }
                            >
                                <a
                                    className={
                                        classes.Link
                                    }
                                    href='https://some-url-ref.com'
                                >
                                    About
                                </a>
                            </li>
                            <li
                                className={
                                    classes.Item
                                }
                            >
                                <a
                                    className={
                                        classes.Link
                                    }
                                    href='https://some-url-ref.com'
                                >
                                    Articles
                                </a>
                            </li>
                        </ul>
                    </nav>
                </React.Fragment>;
        }
    };

    return navigation();
}

export default Navigation;