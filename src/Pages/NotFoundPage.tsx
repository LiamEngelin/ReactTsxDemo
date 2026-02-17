import styles from './css/NotFoundPage.module.css';

export const NotFoundPage = () => {

    return (
        <>
            <div>
                <h1 className={styles.bigH1}>404</h1>
                <h3>I think you took a wrong turn</h3>
            </div>
        </>
    )
}