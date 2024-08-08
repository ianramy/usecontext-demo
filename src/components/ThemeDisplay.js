// src/components/ThemeDisplay.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeDisplay = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`theme-display ${theme}`}>
            <h1>The current theme is {theme}</h1>
        </div>
    );
};

export default ThemeDisplay;
