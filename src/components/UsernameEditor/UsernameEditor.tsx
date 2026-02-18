import type { ChangeEvent } from "react";
import { useApp } from "../../context/appContext"

export const UsernameEditor = () => {
    console.log("Rendered UsernameEditor");

    const { username, setUsername } = useApp();

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value);
    }

    return (
        <>
            <input 
                type="text"
                value={username}
                placeholder="enter name"
                onChange={onNameChange}
            />
        </>
    );
}