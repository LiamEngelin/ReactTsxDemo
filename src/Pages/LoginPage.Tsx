import { ThemeBadge } from '../components/ThemeBadge/ThemeBadge'
import { LoginForms } from '../components/LoginForms/LoginForms.modules'
import { ThemeToggleButton } from '../components/ThemeToggleButton/ThemeToggleButton'
import { UsernameDisplay } from '../components/UsernameDisplay/UsernameDisplay'
import { UsernameEditor } from '../components/UsernameEditor/UsernameEditor'
import styles from "./css/LoginPage.module.css"

export const LoginPage = () => {
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
                <LoginForms />
            </div>
        </>
    )
}