import React from 'react';

import logopng from './images/logo.png';
import NavBar from './components/navbar/NavBar';
import DiffChecker from './components/diffchecker/DiffChecker';
import DiffForm from './components/form/DiffForm';

import './App.css';

const App = () => {
    return (
        <div>
            <a href='/'><img src={logopng} alt='logo' height='60'/></a>
            <h1>App</h1>
            <NavBar />
            <DiffChecker />
            <DiffForm />
        </div>
    )
};

export default App;