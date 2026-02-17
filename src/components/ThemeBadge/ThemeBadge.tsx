import { useApp } from '../../context/appContext'
import styles from './themebadge.module.css'

export const ThemeBadge = () => {
    const { theme } = useApp();

    return (
    <>
        <div className={styles.currentTheme}>
            <p>{theme === 'light' ? '☀️' : '🌙'}</p>
        </div>
    </>
    );
}
