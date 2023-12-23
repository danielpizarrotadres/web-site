import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
// import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";

// TODO: Try to take a similar photo
import logo from './logo.jpg';

import screen from './screen.jpeg';
import closing from './closing.svg'
import arrow from './logo.svg';
import { BsGithub } from 'react-icons/bs';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';


const App = () => {
    // TODO:
    // -> Make funcionality to update size state dinamycally by the current px of the naigation viewport.
    // -> Convert containers into isolated components.
    // -> Make funcionality to render mobile navigation with animations.
    const [size] = useState('sm');
    const [toggle, setToggle] = useState({
        iconClass: classes.ArrowIcon,
        show: false,
    });

    useEffect(() => {
        // console.log('listening to toggle -> ', toggle);
    }, [toggle]);

    const mobileNavitation = () => {
        return <React.Fragment>
            <div className={classes.MobileNavigation}>
                <div className={classes.MobileNavigationHeader}>
                    Navigation
                    Icon
                </div>
            </div>
        </React.Fragment>;
    };

    const mobileNav = () => {
        return <React.Fragment>
            <nav className={classes.MobileNav}>
                <div className={classes.NavMenu}>
                    <div className={classes.MobileNavigationHeader}>
                        <h2>Navigation</h2>
                        { /* <img alt='closing' src={closing} /> */}
                        <IoMdClose className={classes.Closing} onClick={handleOnClick} />
                    </div>
                    <section className={classes.MobileNavigationItems}>
                        <ul>
                            <li className={classes.MobileNavigationActiveItem}>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Articles</a>
                            </li>
                            <li><a>Projects</a></li>
                        </ul>
                    </section>
                </div>
            </nav>
        </React.Fragment>;
    };

    const navigation = () => {
        switch (size) {
            case 'sm': // -> Small >= 576px
            case 'md': // -> Medium >= 768px
                return <React.Fragment>
                    <button
                        id="toggle"
                        className={classes.Toggle}
                        onClick={handleOnClick}
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

    // returns JSX Fragment with required csss classes.
    const resume = () => {
        return <React.Fragment>
            <div className={classes.Resume}>
                {/*
                    <p className={classes.TopItem}>
                        I am passionate about development <span className={classes.ScreenPlay}>—</span>
                        <span className={classes.Highlight}> I love automating things </span>
                        <span className={classes.Point}>,</span>
                        <br />
                        <span className={classes.Slim}> modern technologies </span> and
                        <span className={classes.Slim}> good developer experience</span> 
                        <span className={classes.Point}>.</span>
                    </p>
                    <p className={classes.BottomItem}>
                        <span className={classes.PinkHighlight}>I am a perfectionist</span>
                        <span className={classes.PinkPoint}>. </span>  
                        I pay attention to details,
                        because I love when things look
                        <span className={classes.PinkSlim}> good </span> 
                        and
                        <span className={classes.PinkSlim}> professionnal</span>
                        <span className={classes.PinkPoint}>. </span>
                        I am also self-taught, and <br/>
                        <span className={classes.PinkSlim}> I never stop learning</span>
                        <span className={classes.PinkPoint}>.</span>
                    </p>
                    */}
            </div>
        </React.Fragment>;
    };

    const icons = () => {
        return <React.Fragment>
            <div className={classes.IconContainer}>
                <a
                    className={classes.Icon}
                    href='https://github.com/danielpizarrotadres'
                    target="_blank"
                >
                    <BsGithub />
                </a>
                <a
                    className={classes.Icon}
                    href='https://twitter.com/danitadres'
                    target="_blank"
                >
                    <TfiTwitterAlt />
                </a>
                <a
                    className={classes.Icon}
                    href='https://www.linkedin.com/in/danieldev1999/'
                    target="_blank"
                >
                    <AiFillLinkedin />
                </a>
                <a
                    className={classes.Icon}
                    href='https://some-url-ref.com'
                    target="_blank"
                >
                    <MdEmail />
                </a>
            </div>
        </React.Fragment>
    };

    const handle = () => {
        // More info about event.target.closest at: 
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        // https://css-tricks.com/dangers-stopping-event-propagation/
        // const currentClass = toggle.iconClass;
        // const defaultClass = classes.ArrowIcon;
        // const toggleIsClicked = currentClass === defaultClass;

        // if (toggleIsClicked) {
        //     setToggle({
        //         iconClass: classes.ClickedArrowIcon,
        //         show: true,
        //     });
        //     return;
        // }

        // setToggle({
        //     iconClass: classes.ArrowIcon,
        //     show: false,
        // });
        if (toggle.show) {
            setToggle({
                iconClass: classes.ArrowIcon,
                show: false,
            });
        }
    };

    const handleOnClick = () => {
        setToggle({
            show: !toggle.show,
            iconClass: toggle.iconClass.includes('Clicked')
                ? classes.ArrowIcon
                : classes.ClickedArrowIcon,
        });
    };

    return (
        <main>
            {toggle.show && mobileNav()}
            { /* onClick={handle} */}
            <div
                onClick={handle}
                className={
                    `${classes.App} ${toggle.show ? classes.AppBlured : ''}`
                }
            >

                {   /*********************** Header *********************/}
                {   /* The following header container should be isolated as a component. **/}
                <header
                    className={
                        classes.Header
                    }
                >
                    <img
                        alt='logo'
                        src={screen}
                        className={
                            classes.Logo
                        }
                    />
                    {navigation()}
                </header>

                {
                    /* The following JSX React Fragment should be isolated as a component  */
                    /* This funcionality allow render the menu navigation on mobile devices */
                }
                { /* toggle.show && mobileNavitation() */}

                {   /*********************** Header End *****************/}




                {   /*********************** Main *********************/}
                {   /* The following main container should be isolated as a component. **/}
                <main>
                    <header className={classes.Main}>
                        <p className={classes.Title}>
                            Hey, I am Daniel.
                            <br />
                            Mobile & web developer,
                            <br />
                            from Chile.
                        </p>
                    </header>
                    {resume()}
                    {icons()}
                </main>

                {   /*********************** Main End *****************/}




                {   /*********************** Footer *********************/}
                {   /*********************** Footer End *****************/}
            </div>
        </main>
    );
}

export default App;
