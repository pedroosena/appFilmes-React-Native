import { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext({
    currentTheme: 'light', 
    toggleTheme: () => {},
    colors: {}
});

const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        async function getTheme() {
            try {
                const result = await AsyncStorage.getItem('theme');
                if ( result ) {
                    setTheme(result);
                }

            } catch(error) {
                console.log(error)
            }
        }

        getTheme();

    }, [])

    function toggleTheme(newTheme) {
        setTheme(newTheme)
        AsyncStorage.setItem('theme', newTheme)
    }
    
    const colors = theme === 'dark' ? 
    {
        background: "#191a30",
        text: "#fff",
        red: "#E72f49",
        lightBlue: "#313357"
    }
    :
    {
        background: "#fff",   
        text: "#000",         
        red: "#E72f49",       
        lightBlue: "#1E90FF", 
    }

    return(
        <ThemeContext.Provider value={{currentTheme: theme, toggleTheme, colors}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;