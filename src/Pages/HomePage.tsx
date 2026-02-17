import styles from './css/HomePage.module.css';

export const HomePage = () => {

    return (
        <>
            <div>
                <h1>Hey! you aren't logged in!</h1>
                <h3>Log in below</h3>
                <a className={styles.primaryCta} href='/login'>Login</a>
            </div>
        </>
    )
}