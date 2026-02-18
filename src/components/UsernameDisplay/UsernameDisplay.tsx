import { useApp } from "../../context/appContext";

export const UsernameDisplay = () => {
    console.log("Rendered UsernameDisplay");
    
    const { username } = useApp();

    return (
        <p>Welcome: {username}</p>
    )
}