import React, { useState } from 'react'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme"
import Footer from './Footer'
import Navbar from './Navbar'
export const Layout = ({ children, setSearch, searchText, isBackgroundActive, setBackground, showSideBar, setShowSideBar }) => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <div>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Navbar themeToggler={themeToggler} setSearchText={setSearch} searchText={searchText} />
                {
                    React.cloneElement(children, {
                        searchText: searchText
                    })
                }
                <Footer />
            </ThemeProvider>
        </div>
    )
}