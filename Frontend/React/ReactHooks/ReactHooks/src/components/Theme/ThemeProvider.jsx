import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    //STATE THAT IS A BOOL ON WETHER OUR APP IS IN DARK OR LIGHT MODE
    const [isDarkMode, setIsDarkMode] = useState(false);
//FUNCTION TO UPDATE OUR STATE AKA TOGGLE OUR BOOL VALUE
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
//PACK INTO OUR CONTEXT VALUE OBJECT
    const contextValue = {
        isDarkMode,
        toggleTheme,
    };
//WE ARE PASSING IT TO THE PROVIDER - WHICH THEY CAN PASS IT TO THE REST OF OUR COMP. TREE
    return <ThemeContext.Provider
        value={contextValue}>
        {children}
    </ThemeContext.Provider>
};

export default ThemeProvider