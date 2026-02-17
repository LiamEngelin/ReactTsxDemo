import styles from './loginforms.module.css';

export const LoginForms = () => {

    const buttonClick = () => {
        console.log("submit")
    }

    return (
        <>
        <div className={styles.mainDiv}>
            <div>
                <h1>Wow this login page is amazing</h1>
                <h2>Give me your credentials please :)</h2>
            </div>
            <div>
                <label className={styles.inputText}>Username</label>
                <input
                    type="text"
                    placeholder='User'
                    autoComplete='email'
                />
            </div>
            <div>
                <label className={styles.inputText}>Password</label>
                <input
                    type="text"
                    placeholder='Password'
                    autoComplete='email'
                />
            </div>
            <div>
                <button onClick={buttonClick}>
                    Log in
                </button>
            </div>
        </div>
            
        </>
    )
}