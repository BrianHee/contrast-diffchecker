import React from 'react';

import NavBar from './components/navbar/NavBar';
import DiffChecker from './components/diffchecker/DiffChecker';
import DiffForm from './components/form/DiffForm';

import './App.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <DiffChecker />
            <DiffForm />
        </div>
    )
};

export default App;