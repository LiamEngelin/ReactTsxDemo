import { useApp } from '../../context/appContext'
 
export const ThemeToggleButton = () => {

    const { theme, toggleTheme } = useApp();

    const onButtonClick = () => {
        toggleTheme(theme === "dark" ? "light" : "dark")
    }

    return(
        <div>
            <button onClick={onButtonClick}>UI Mode</button>
        </div>
    );
}
