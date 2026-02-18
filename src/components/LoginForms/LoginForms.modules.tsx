import { useState, useEffect, useMemo, type ChangeEvent } from 'react';

import styles from './loginforms.module.css';

export const LoginForms = () => {

    const [username, setUsername] = useState(""); // username to read, setUsername to update. ("") = Default value
    const [password, setPassword] = useState("");

    const [loggedInStatus, setLoggedInStatus] = useState("Currently signed out")

    const [passwordWarning, setPasswordWarning] = useState<string>(""); 

    const passwordOk = useMemo(() => password.trim().length >= 6, [password]); 

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }

    const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(username);
        console.log("Submit");

        if(!passwordOk){
            setPasswordWarning("Password must contain 6 characters")
        } else {
            setPasswordWarning("")
            setLoggedInStatus("Logged in wow");
        }
    }

    useEffect(()=> {
        console.log(username);
    }, [username])

    return (
        <>
            <div>
                <h1>Wow this login page is amazing</h1>
                <h2>Give me your credentials please :)</h2>
                <h3>{loggedInStatus}</h3>
            </div>
            <form onSubmit={handleSubmit} className={styles.mainDiv}>
                <div>
                    <label className={styles.inputText}>Username</label>
                    <input
                        type="text"
                        placeholder='User'
                        value={username}
                        onChange={onUsernameChange}
                    />
                </div>
                <div>
                    <label className={styles.inputText}>Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={onPasswordChange}
                    />
                </div>
                <div>
                    <h4>{passwordWarning}</h4>
                </div>
                <div>
                    <button type="submit">
                        Log In
                    </button>
                </div>
            </form>
        </>
    )
}