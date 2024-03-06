import { useState } from 'react';
import classes from './App.module.css';

import MobileNavigation from './components/MobileNavigation';
import Header from './components/Header';

const App = () => {
    // TO DO: Pass to store
    const [toggle, setToggle] = useState({
        iconClass: classes.ArrowIcon,
        show: false,
    });


    const handleData = (value) => {
        console.log('Clicked on index:', value);
    }

    return (
        <main>
            <MobileNavigation onData={handleData} />

            <div className={classes.App}>
                <Header />
            </div>

        </main>
    );
}

export default App;
