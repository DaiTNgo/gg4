import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import ReactGA from "react-ga4";

function App() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    //     ReactGA.event({
    //         category: 'User' + count,
    //         action: 'Clicked Button'
    //     })

    //     ReactGA.send({
    //         hitType: 'pageview',
    //         page: '/daingoprodn'
    //     });
    // }, [count]);
    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Hello Vite + React!</p>
                    <p>
                        <button
                            type="button"
                            onClick={() => setCount((count) => count + 1)}>
                            count is: {count}
                        </button>
                    </p>
                    <p>
                        Edit <code>App.jsx</code> and save to test HMR updates.
                    </p>
                    <p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer">
                            Learn React
                        </a>
                        {" | "}
                        <a
                            className="App-link"
                            href="https://vitejs.dev/guide/features.html"
                            target="_blank"
                            rel="noopener noreferrer">
                            Vite Docs
                        </a>
                    </p>
                </header>
            </div>
        </React.Fragment>
    );
}

export default App;
