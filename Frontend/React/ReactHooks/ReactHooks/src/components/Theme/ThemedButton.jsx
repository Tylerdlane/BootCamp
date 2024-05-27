import { useContext } from "react";
import ThemeContext from "./ThemeContext";


const ThemedButton = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    // const styles = {
    //     background: isDarkMode ? '#333' : '#fff',
    //     color: isDarkMode ? '#fff' : '#333',
    //     padding: '20px'
    // }

    return (
        <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
            <h1>{ isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemedButton