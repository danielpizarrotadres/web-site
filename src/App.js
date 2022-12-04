import React, { useEffect, useState } from 'react';
import classes from './App.module.css'; 
// import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import logo from './logo.jpg';
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
        show: false
    });

    // useEffect(() => {
    //     console.log('useEffect runs now: ', showMobileMenu);
    // }, [showMobileMenu]);

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

    // returns JSX Fragment with required csss classes.
    const resume = () => {
        return <React.Fragment>
                <div className={classes.Resume}>
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
                </div>
        </React.Fragment>;
    };

    const icons = () => {
        return <React.Fragment>
                <div className={classes.IconContainer}>
                    <a
                        className={classes.Icon}
                        href='https://some-url-ref.com'
                    >
                        <BsGithub />
                    </a>
                    <a
                        className={classes.Icon}
                        href='https://some-url-ref.com'
                    >
                        <TfiTwitterAlt />
                    </a>
                    <a
                        className={classes.Icon}
                        href='https://some-url-ref.com'
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        className={classes.Icon}
                        href='https://some-url-ref.com'
                    >
                        <MdEmail />
                    </a>
                </div>
        </React.Fragment>
    };

    // const handleOnClick = (event) => {
    //     console.log('event: ', event.target);
    //     setShowMobileMenu(!showMobileMenu);
    // };

    const handle = (event) => {
        // More info about event.target.closest at: 
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        // https://css-tricks.com/dangers-stopping-event-propagation/

        const IS_OUTSIDE = event.target.closest('#toggle') ? true : false;

        if (IS_OUTSIDE) {
            setToggle({
                iconClass: classes.ClickedArrowIcon,
                show: !toggle.show,
            });
            return;
        }

        setToggle({
            iconClass: classes.ArrowIcon,
            show: false,
        });
    };

    return (
        <div
            onClick={handle}
            className={
                classes.App
            }
        >

            {   /*********************** Header *********************/   }
            {   /* The following header container should be isolated as a component. **/   }
            <header
                className={
                    classes.Header
                }
            >
                <img
                    alt='logo'
                    src={logo}
                    className={
                        classes.Logo
                    }
                />
                {   navigation()  }
            </header>

            {   /*********************** Header End *****************/   }




            {   /*********************** Main *********************/   }
            {   /* The following main container should be isolated as a component. **/   }
            <main>
                <header className={classes.Main}>
                    <p className={classes.Title}>
                        Hey, I am Daniel.
                        <br />
                        Full-stack web developer,
                        <br />
                        from Chile.
                    </p>
                </header>
                {   resume()    }
                {   icons()   }
            </main>

            {   /*********************** Main End *****************/   }




            {   /*********************** Footer *********************/   }
            {   /*********************** Footer End *****************/   }




        </div>
    );
}

export default App;
