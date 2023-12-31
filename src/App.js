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
import { FaHeart } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";
import { BiMinusFront } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";

const App = () => {
    // TODO:
    // -> Make funcionality to update size state dinamycally by the current px of the naigation viewport.
    // -> Convert containers into isolated components.
    // -> Make funcionality to render mobile navigation with animations.
    const [size] = useState('lg');
    const [toggle, setToggle] = useState({
        iconClass: classes.ArrowIcon,
        show: false,
    });
    const [urls] = useState([
        'https://expressjs.com/',
        'https://react.dev/'
    ])

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
                <p className={classes.TopItem}>
                    I am passionate about web development <span className={classes.ScreenPlay}>—</span>
                    <span className={classes.Highlight}> I love automating things </span>
                    <span className={classes.Point}>, and</span>
                    <br />
                    <span className={classes.Slim}>learn </span>
                    <span className={classes.Point}>new stuffs.</span>
                </p>
                <p className={classes.BottomItem}>
                    <span className={classes.PinkHighlight}>I am passionate about what I do and I take it seriously</span>
                    <span className={classes.PinkPoint}>. </span>
                    I pay attention to details,
                    because I love when things look
                    <span className={classes.PinkSlim}> good </span>
                    and
                    <span className={classes.PinkSlim}> professionnal</span>
                    <span className={classes.PinkPoint}>. </span>
                    I am also self-taught, and <br />
                    <span className={classes.PinkSlim}> I never stop learning</span>
                    <span className={classes.PinkPoint}>.</span>
                </p>
            </div>
        </React.Fragment>;
    };

    const icons = () => {
        return <React.Fragment>
            <div className={classes.IconContainer}>
                <a
                    className={classes.Icon}
                    href='https://github.com/danielpizarrotadres'
                    target='_blank'
                >
                    <BsGithub />
                </a>
                <a
                    className={classes.Icon}
                    href='https://twitter.com/danitadres'
                    target='_blank'
                >
                    <TfiTwitterAlt />
                </a>
                <a
                    className={classes.Icon}
                    href='https://www.linkedin.com/in/danieldev1999/'
                    target='_blank'
                >
                    <AiFillLinkedin />
                </a>
                <a
                    className={classes.Icon}
                    href='https://some-url-ref.com'
                    target='_blank'
                >
                    <MdEmail />
                </a>
            </div>
        </React.Fragment>
    };

    const footer = () => {
        return <React.Fragment>
            <footer>
                <span className={classes.LettersMadeWith}>
                    Made with <FaHeart className={classes.IconMadeWith} /> by Dani
                </span>
            </footer>
        </React.Fragment>
    }

    const stack = () => {
        return <React.Fragment>
            <div className={classes.StackContainer}>
                <h1 className={classes.StackContainerTitle}>Stack</h1>

                <div className={classes.SubTitleContainer}>
                    <h5 className={classes.StackContainerSubTitle}>
                        Here are the tools I'm most productive with.
                    </h5>
                </div>

                <section className={classes.StackContainerTechnologies}>
                    <div
                        className={classes.StackContainerTechnologiesItem}
                        onClick={() => handleOnClickStack(urls[0])}
                    >
                        <div className={classes.StackContainerTechnologiesItemIcon}>
                            <SiExpress className={classes.StackContainerIcon} />
                        </div>
                        <div className={classes.StackContainerTechnologiesItemDescription}>
                            <h4
                                className={classes.StackContainerTechnologiesItemDescriptionTitle}
                            >
                                <span
                                    className={classes.StackContainerTechnologiesItemDescriptionTitleDotted}
                                >
                                    Express
                                </span>
                            </h4>
                            <span
                                className={classes.StackContainerTechnologiesItemDescriptionDetails}
                            >
                                Express is a minimal and flexible Node.js web application framework
                                that provides a robust set of features for web and mobile applications.
                            </span>
                        </div>
                    </div>
                    <div
                        className={classes.StackContainerTechnologiesItem}
                        onClick={() => handleOnClickStack(urls[1])}
                    >
                        <div className={classes.StackContainerTechnologiesItemIcon}>
                            <FaReact className={classes.StackContainerIcon} />
                        </div>
                        <div className={classes.StackContainerTechnologiesItemDescription}>
                            <h4
                                className={classes.StackContainerTechnologiesItemDescriptionTitle}
                            >
                                <span
                                    className={classes.StackContainerTechnologiesItemDescriptionTitleDotted}
                                >
                                    React
                                </span>
                            </h4>
                            <span className={classes.StackContainerTechnologiesItemDescriptionDetails}>
                                React is the library for web and native user interfaces.
                                Build user interfaces out of individual pieces called components written in JavaScript.
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    }

    const tools = () => {
        return <React.Fragment>
            <div className={classes.ToolsContainer}>
                <h1 className={classes.ToolsContainerTitle}>Tools</h1>

                <div className={classes.SubTitleToolsContainer}>
                    <h5 className={classes.ToolsContainerSubTitle}>
                        Some of the other tools I am familiar with.
                    </h5>
                </div>

                <div className={classes.ToolsContaineTechnologies}>
                    <div className={classes.ToolsContaineTechnologiesItemContainer}>
                        <div className={classes.ToolsContaineTechnologiesItem}>
                            <HiTerminal className={classes.ToolsContainerIcon} />
                            <span className={classes.ToolsContainerItemTitle}>BACK-END</span>
                        </div>
                        <div className={classes.ToolsContaineTechnologiesItemList}>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Django
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Node
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Nest
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Java
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                PostgreSQL
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                MySQL
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                SQL Server
                            </span>
                        </div>
                    </div>
                    <div className={classes.ToolsContaineTechnologiesItemContainer}>
                        <div className={classes.ToolsContaineTechnologiesItem}>
                            <BiMinusFront className={classes.ToolsContainerIcon} />
                            <span className={classes.ToolsContainerItemTitle}>FRONT-END</span>
                        </div>
                        <div className={classes.ToolsContaineTechnologiesItemList}>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                React Native
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                TypeScript
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Vue
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                CSS
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Single Spa
                            </span>
                        </div>
                    </div>
                    <div className={classes.ToolsContaineTechnologiesItemContainer}>
                        <div className={classes.ToolsContaineTechnologiesItem}>
                            <FaBriefcase className={classes.ToolsContainerIcon} />
                            <span className={classes.ToolsContainerItemTitle}>OTHER</span>
                        </div>
                        <div className={classes.ToolsContaineTechnologiesItemList}>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Linux
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                AWS
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Jest
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Cypress
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                GraphQL
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <span className={classes.ToolsContainerTechnologiesItemDescription}>
                                Figma
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }

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

    const handleOnClickStack = (url) => {
        window.open(url, '_blank');
    }

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
                            Hi, I am Dani
                            <br />
                            <span className={classes.SubTitle}>
                                web developer,
                                <br />
                                from Chile.
                            </span>
                        </p>
                    </header>
                    {resume()}
                    {icons()}
                    {stack()}
                    {tools()}
                    {footer()}
                </main>

                {   /*********************** Main End *****************/}




                {   /*********************** Footer *********************/}
                {   /*********************** Footer End *****************/}
            </div>
        </main>
    );
}

export default App;
