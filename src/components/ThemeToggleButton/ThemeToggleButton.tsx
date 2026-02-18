import { useApp } from '../../context/appContext'
import styles from './ThemeToggleButton.module.css'
 
export const ThemeToggleButton = () => {
    console.log("Rendered ThemeToggleButton");
    
    const { theme, toggleTheme } = useApp();

    const onButtonClick = () => {
        toggleTheme(theme === "dark" ? "light" : "dark");
    }

    return(
        <div className={styles.buttonPosition}>
            <button className={styles.button} onClick={onButtonClick}>UI Mode</button>
        </div>
    );
}