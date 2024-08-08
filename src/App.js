// src/App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeDisplay from './components/ThemeDisplay';
import './index.css';

const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <ThemeSwitcher />
                <ThemeDisplay />
            </div>
        </ThemeProvider>
    );
};

export default App;

