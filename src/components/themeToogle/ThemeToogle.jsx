import { FaSun, FaMoon } from "react-icons/fa";
import './ThemeToogle.css'
import { useEffect, useState } from "react";

const ThemeToogle = () => {
    const [theme, setTheme] = useState('light')


    useEffect(() => {
        const saveTheme = localStorage.getItem('saved-theme')

        if (saveTheme) {
            setTheme(saveTheme)
            document.body.classList.toggle('dark-theme', saveTheme === 'dark')
        }
    }, [])

    const toogleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.body.classList.toggle('dark-theme', newTheme === 'dark')
        localStorage.setItem('saved-theme', newTheme)
    }

    return (
        <div className="them-btn" onClick={toogleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </div>
    )
}

export { ThemeToogle }