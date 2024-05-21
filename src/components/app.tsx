import React from 'react';
import './app.css';
import logo from '../assets/logo.svg';

export const App = (): JSX.Element => {
    return (
        <div className="app">
            <header className="app__header">
                <img src={logo} className="app__logo" alt="logo" />
                <p>
                    Edit <code>src/app.tsx</code> and save to reload.
                </p>
                <a
                    className="app__link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};
