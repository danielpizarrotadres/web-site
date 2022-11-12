import classes from './App.module.css';

const App = () => {
    return (
        <div class={classes.App}>
            <header class={classes.Header}>
                <h1 class={classes.Title}>
                    Hello world!
                </h1>
            </header>
        </div>
    );
}

export default App;
