# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

usecontext-demo
usecontext-demo is a simple React application that demonstrates how to use the useContext API to manage and switch themes (light and dark) across components. This example highlights the use of context and hooks in React for state management and component interaction.

Table of Contents
Features
Installation
Usage
File Structure
Code Breakdown
Contributing
License
Features
Toggle between light and dark themes using a button.
Display the current theme in a component.
Demonstrate the use of React Context and Hooks.
Installation
To get started with this project, follow these steps:

Clone the repository:



git clone https://github.com/ianramy/usecontext-demo.git
Navigate to the project directory:



cd usecontext-demo
Install dependencies:



npm install
Usage
Start the development server:



## Interact with the application:

Click the "Switch to Dark Theme" or "Switch to Light Theme" button to toggle between themes.
Observe the current theme displayed on the page.
File Structure
Here’s a quick overview of the project structure:

java

usecontext-demo/
│
├── public/
│   ├── index.html
│
├── src/
│   ├── ThemeContext.js
│   ├── App.js
│   ├── components/
│   │   ├── ThemeSwitcher.js
│   │   ├── ThemeDisplay.js
│   ├── index.css
│   ├── index.js
│
├── package.json
├── README.md
public/index.html: The HTML template file.
src/ThemeContext.js: Defines the ThemeContext and ThemeProvider component.
src/App.js: Main application component that wraps the app with the ThemeProvider.
src/components/ThemeSwitcher.js: Component to toggle the theme.
src/components/ThemeDisplay.js: Component to display the current theme.
src/index.css: Basic CSS file for styling the themes.
src/index.js: Entry point for the React application.
## Code Breakdown
### src/ThemeContext.js
Defines the ThemeContext and ThemeProvider. The ThemeProvider component manages the theme state and provides a method to toggle between light and dark themes.

### src/App.js
Wraps the entire application with the ThemeProvider and includes the ThemeSwitcher and ThemeDisplay components.

### src/components/ThemeSwitcher.js
Provides a button to toggle the theme. It uses useContext to access the toggleTheme function from ThemeContext.

### src/components/ThemeDisplay.js
Displays the current theme and applies dynamic styling based on the theme value obtained from ThemeContext.

src/index.css
Contains basic styling for light and dark themes.