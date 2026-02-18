import { ThemeBadge } from '../components/ThemeBadge/ThemeBadge';
import { ThemeToggleButton } from '../components/ThemeToggleButton/ThemeToggleButton';
import { Link } from 'react-router-dom';
import { UsernameDisplay } from '../components/UsernameDisplay/UsernameDisplay';
import { UsernameEditor } from '../components/UsernameEditor/UsernameEditor';
import styles from './css/HomePage.module.css';

export const HomePage = () => {

    return (
        <>
            <header>
                <div>
                    <ThemeToggleButton/>
                    <ThemeBadge/>
                </div>
                <div className={styles.UsernameSection}>
                    <UsernameEditor/>
                    <UsernameDisplay/>
                </div>
            </header>
            <div>
                <h1>Hey! you aren't logged in!</h1>
                <h3>Log in below</h3>
                <Link className={styles.primaryCta} to='/login'>Login</Link>
            </div>
        </>
    )
}