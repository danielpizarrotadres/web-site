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
import useWindowSize from './utils/hooks/useWindowSize';
import { FaLongArrowAltRight } from "react-icons/fa";

import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";

const App = () => {
    const [size, setSize] = useState('lg');
    const [toggle, setToggle] = useState({
        iconClass: classes.ArrowIcon,
        show: false,
    });
    const [urls] = useState([
        'https://expressjs.com/',
        'https://react.dev/'
    ]);
    const windowSize = useWindowSize();

    const [items, setItems] = useState([
        {
            index: 0,
            name: 'About',
            selected: true
        },
        // {
        //     index: 1,
        //     name: 'Articles',
        //     selected: false
        // },
        // {
        //     index: 2,
        //     name: 'Projects',
        //     selected: false
        // }
    ]);

    useEffect(() => {
        const { width } = windowSize;
        if (width <= 768) {
            setSize('sm');
        } else {
            setSize('lg');
        }
    }, [windowSize]);

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
                            {items.map((item) =>
                                <li
                                    key={item.index}
                                    className={classes.MobileNavigationActiveItem}
                                    onClick={() => handleViewChange(item)}
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
                            {items.map((item) =>
                                <li
                                    key={item.index}
                                    className={classes.Item}
                                    onClick={() => handleViewChange(item)}
                                >
                                    <a className={
                                        `${classes.Link} ${item.selected ? classes.LinkSelected : ''}`
                                    }>
                                        {item.name}
                                    </a>
                                </li>
                            )}
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
                    I make web and mobile applications. 
                    {/* I work together with people <span className={classes.ScreenPlay}>—</span>companies, organizations and startups 
                    to <span className={classes.Highlight}>bring value</span> to business with <br />
                    <span className={classes.PinkHighlight}>custom made software</span>
                    <br /> */}
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
                        onClick={() => handleOnClickStack(urls[1])}
                    >
                        <div className={classes.StackContainerTechnologiesItemIcon}>
                            <RiReactjsLine className={classes.StackContainerIconReact} />
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
                    <div
                        className={classes.StackContainerTechnologiesItem}
                        onClick={() => handleOnClickStack(urls[0])}
                    >
                        <div className={classes.StackContainerTechnologiesItemIcon}>
                            <FaNodeJs className={classes.StackContainerIconExpress} />
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
                            <a
                                href='https://nestjs.com/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Nest
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.djangoproject.com/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Django
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://spring.io/projects/spring-boot/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Spring Boot
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.postgresql.org/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                PostgreSQL
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.mysql.com/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                MySQL
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.microsoft.com/en-us/sql-server'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                SQL Server
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.mongodb.com/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                MongoDB
                            </a>
                        </div>
                    </div>
                    <div className={classes.ToolsContaineTechnologiesItemContainer}>
                        <div className={classes.ToolsContaineTechnologiesItem}>
                            <BiMinusFront className={classes.ToolsContainerIcon} />
                            <span className={classes.ToolsContainerItemTitle}>FRONT-END</span>
                        </div>
                        <div className={classes.ToolsContaineTechnologiesItemList}>
                            <a
                                href='https://reactnative.dev/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                React Native
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.typescriptlang.org/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                TypeScript
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://vuejs.org/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Vue
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                CSS
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://single-spa.js.org/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Single Spa
                            </a>
                        </div>
                    </div>
                    <div className={classes.ToolsContaineTechnologiesItemContainer}>
                        <div className={classes.ToolsContaineTechnologiesItem}>
                            <FaBriefcase className={classes.ToolsContainerIcon} />
                            <span className={classes.ToolsContainerItemTitle}>OTHER</span>
                        </div>
                        <div className={classes.ToolsContaineTechnologiesItemList}>
                            <a
                                href='https://www.linux.org/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Linux
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://aws.amazon.com/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                AWS
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.nginx.com/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                NGINX
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://jestjs.io/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Jest
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.cypress.io/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Cypress
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://graphql.org/'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                GraphQL
                            </a>
                            <span className={classes.ToolsContainerTechnologiesItemPoint}>
                            </span>
                            <a
                                href='https://www.figma.com'
                                target='_blank'
                                className={classes.ToolsContainerTechnologiesItemDescription}
                            >
                                Figma
                            </a>
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

    // TODO: Refactor setItems. Add a better implementation:
    const handleViewChange = (item) => {
        setItems(items.map(aux => {
            const findSelectedItem = aux.index === item.index;
            if (findSelectedItem) {
                return {
                    ...aux,
                    selected: true,
                }
            } else {
                return {
                    ...aux,
                    selected: false,
                }
            }
        }));
        handle();
    };

    const home = () => {
        return <React.Fragment>
            <main>
                <header className={classes.Main}>
                    <p className={classes.Title}>
                        Hello, I am Daniel
                        <br />
                        <span className={classes.SubTitle}>
                            web developer from Chile.
                            <br />
                        </span>
                    </p>
                </header>
                {resume()}
                {icons()}
                {stack()}
                {tools()}
            </main>
        </React.Fragment>;
    }

    const projects = () => {
        return <React.Fragment>
            <main>
                <article className={classes.ProjectContainer}>
                    <h1>I've made a few things.</h1>
                    <h5>I am not very creative, and my side projects are rarely get finished, let alone published — but I am proud of the ones listed here.</h5>
                </article>
            </main>
        </React.Fragment>;
    }

    const articlesListItemMobile = () => {
        return <section className={classes.ArticlesListContainer}>
            <div className={classes.ArticlesItem}>
                <div className={classes.ArticlesItemTop}>
                    <span className={classes.ArticlesItemTopDate}>January 4, 2024</span>
                    <span className={classes.ArticlesItemTopDurationOfRead}>6 min read</span>
                </div>
                <div className={classes.ArticlesItemContent}>
                    <h6 className={classes.ArticlesItemContentTitle}>
                        Managing GitLab Integration using Microsoft Teams
                    </h6>
                    <p className={classes.ArticlesItemContentDescription}>
                        Microsoft Teams has a pretty good integration with GitLab repositories.
                        This article shows how to integrate in your channels in a simple way.
                    </p>
                </div>
                <div className={classes.ArticlesItemBottom}>
                    <span>Read article</span>
                    <FaLongArrowAltRight className={classes.ArticlesArrowIcon} />
                </div>
            </div>
            {/* <div className={classes.ArticlesItem}>
                <div className={classes.ArticlesItemTop}>
                    <span className={classes.ArticlesItemTopDate}>January 4, 2024</span>
                    <span className={classes.ArticlesItemTopDurationOfRead}>6 min read</span>
                </div>
                <div className={classes.ArticlesItemContent}>
                    <h6 className={classes.ArticlesItemContentTitle}>
                        Managing GitLab Integration using Microsoft Teams
                    </h6>
                    <p className={classes.ArticlesItemContentDescription}>
                        Microsoft Teams has a pretty good integration with GitLab repositories.
                        This article shows how to integrate in your channels in a simple way.
                    </p>
                </div>
                <div className={classes.ArticlesItemBottom}>
                    <span>Read article</span>
                    <FaLongArrowAltRight className={classes.ArticlesArrowIcon} />
                </div>
            </div>
            <div className={classes.ArticlesItem}>
                <div className={classes.ArticlesItemTop}>
                    <span className={classes.ArticlesItemTopDate}>January 4, 2024</span>
                    <span className={classes.ArticlesItemTopDurationOfRead}>6 min read</span>
                </div>
                <div className={classes.ArticlesItemContent}>
                    <h6 className={classes.ArticlesItemContentTitle}>
                        Managing GitLab Integration using Microsoft Teams
                    </h6>
                    <p className={classes.ArticlesItemContentDescription}>
                        Microsoft Teams has a pretty good integration with GitLab repositories.
                        This article shows how to integrate in your channels in a simple way.
                    </p>
                </div>
                <div className={classes.ArticlesItemBottom}>
                    <span>Read article</span>
                    <FaLongArrowAltRight className={classes.ArticlesArrowIcon} />
                </div>
            </div> */}
        </section>
    }

    const articleListItemDesktop = () => {
        return <section className={classes.ArticlesListContainer}>
            <div className={classes.ArticlesItemDesktop}>
                <div className={classes.ArticlesItemDesktopLeft}>
                    <span className={classes.ArticlesItemDesktopLeftDate}>January 4, 2024</span>
                    <span className={classes.ArticlesItemDesktopDurationOfRead}>6 min read</span>
                </div>
                <div className={classes.ArticlesItemDesktopRight}>
                    <h6 className={classes.ArticlesItemDesktopRightTitle}>
                        Managing GitLab Integration using Microsoft Teams
                    </h6>
                    <p className={classes.ArticlesItemDesktopRightDescription}>
                        Microsoft Teams has a pretty good integration with GitLab repositories.
                        This article shows how to integrate in your channels in a simple way.
                    </p>
                    <div className={classes.ArticlesItemDesktopBottom}>
                        <span className={classes.ArticlesItemDesktopBottomInfo}>Read article</span>
                        <FaLongArrowAltRight className={classes.ArticlesArrowIcon} />
                    </div>
                </div>
            </div>
            {/* <div className={classes.ArticlesItemDesktop}>
                <div className={classes.ArticlesItemDesktopLeft}>
                    <span className={classes.ArticlesItemDesktopLeftDate}>January 4, 2024</span>
                    <span className={classes.ArticlesItemDesktopDurationOfRead}>6 min read</span>
                </div>
                <div className={classes.ArticlesItemDesktopRight}>
                    <h6 className={classes.ArticlesItemDesktopRightTitle}>
                        Managing GitLab Integration using Microsoft Teams
                    </h6>
                    <p className={classes.ArticlesItemDesktopRightDescription}>
                        Microsoft Teams has a pretty good integration with GitLab repositories.
                        This article shows how to integrate in your channels in a simple way.
                    </p>
                    <div className={classes.ArticlesItemDesktopBottom}>
                        <span className={classes.ArticlesItemDesktopBottomInfo}>Read article</span>
                        <FaLongArrowAltRight className={classes.ArticlesArrowIcon} />
                    </div>
                </div>
            </div>
            <div className={classes.ArticlesItemDesktop}>
                <div className={classes.ArticlesItemDesktopLeft}>
                    <span className={classes.ArticlesItemDesktopLeftDate}>January 4, 2024</span>
                    <span className={classes.ArticlesItemDesktopDurationOfRead}>6 min read</span>
                </div>
                <div className={classes.ArticlesItemDesktopRight}>
                    <h6 className={classes.ArticlesItemDesktopRightTitle}>
                        Managing GitLab Integration using Microsoft Teams
                    </h6>
                    <p className={classes.ArticlesItemDesktopRightDescription}>
                        Microsoft Teams has a pretty good integration with GitLab repositories.
                        This article shows how to integrate in your channels in a simple way.
                    </p>
                    <div className={classes.ArticlesItemDesktopBottom}>
                        <span className={classes.ArticlesItemDesktopBottomInfo}>Read article</span>
                        <FaLongArrowAltRight className={classes.ArticlesArrowIcon} />
                    </div>
                </div>
            </div> */}
        </section>
    }

    const articles = () => {
        return <React.Fragment>
            <main>
                <article className={classes.ArticleContainer}>
                    <h1>Writing about JavaScript, React and web development in general.</h1>
                    <h5>Whenever I feel like writing down something I've learnt, I do it here.</h5>
                </article>
                {size == 'sm' ? articlesListItemMobile() : articleListItemDesktop()}
            </main>
        </React.Fragment>;
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

                {   /*********************** Header End *****************/}




                {   /*********************** Main *********************/}
                {   /* The following main container should be isolated as a component. **/}

                <div className={items[0].selected ? classes.FadeIn : classes.FadeOut}>
                    {items[0].selected && home()}
                </div>

                {/* <div className={items[1].selected ? classes.FadeIn : classes.FadeOut}>
                    TODO: restore {items[1].selected && articles()}
                    {items[1].selected && home()}
                </div>

                <div className={items[2].selected ? classes.FadeIn : classes.FadeOut}>
                    TODO: Active Projects View {items[2].selected && projects()}
                    {items[2].selected && home()}
                </div> */}

                {   /*********************** Main End *****************/}




                {   /*********************** Footer *********************/}
                {footer()}
                {   /*********************** Footer End *****************/}
            </div>
        </main>
    );
}

export default App;
