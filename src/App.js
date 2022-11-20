import React, { useEffect, useState } from 'react';
import classes from './App.module.css'; 
// import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';


const App = () => {
    const [size] = useState('md');

    useEffect(() => {
        console.log('useEffect runs now');
    }, []);

    const navigation = () => {
        switch (size) {
            case 'sm': // -> Small >= 576px
                return (
                    <nav className={classes.Navigation}>
                        <ul className={classes.ItemList}>
                            <li className={classes.Item}>
                                <a
                                    className={classes.Link}
                                    href='https://some-url-ref.com'
                                >
                                    Menu
                                    <IoIosArrowDown className={classes.ArrowIcon} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            case 'md': // -> Medium >= 768px
                return (
                    <nav className={classes.Navigation}>
                        <ul className={classes.ItemList}>
                            <li className={classes.Item}>
                                <a
                                    className={classes.Link}
                                    href='https://some-url-ref.com'
                                >
                                    Menu
                                    <IoIosArrowDown className={classes.ArrowIcon} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            case 'lg': // -> Large >= 992px
                return (
                    <nav className={classes.Navigation}>
                        <ul className={classes.ItemList}>
                            <li className={classes.Item}>
                                <a
                                    className={classes.Link}
                                    href='https://some-url-ref.com'
                                >
                                    About
                                </a>
                            </li>
                            <li className={classes.Item}>
                                <a
                                    className={classes.Link}
                                    href='https://some-url-ref.com'
                                >
                                    Articles
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            case 'xl': // -> Extra Large >= 1200px
                return (
                    <nav className={classes.Navigation}>
                        <ul className={classes.ItemList}>
                            <li className={classes.Item}>
                                <a
                                    className={classes.Link}
                                    href='https://some-url-ref.com'
                                >
                                    About
                                </a>
                            </li>
                            <li className={classes.Item}>
                                <a
                                    className={classes.Link}
                                    href='https://some-url-ref.com'
                                >
                                    Articles
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            default:
                break;
        }
    }

    return (
        <div className={classes.App}>

            {   /*********************** Header *********************/   }

            <header className={classes.Header}>
                <img
                    alt='Daniel Pizarro'
                    src='https://innocenzi.dev/_nuxt/avatar.da11de5a.jpg'
                    className={classes.Logo}
                />
                { navigation() }
            </header>

            {   /*********************** Header End *****************/   }




            {   /*********************** Main *********************/   }

            <main>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes
                on purpose (injected humour and the like).
            </main>

            {   /*********************** Main End *****************/   }




            {   /*********************** Footer *********************/   }

            {   /*********************** Footer End *****************/   }




        </div>
    );
}

export default App;
