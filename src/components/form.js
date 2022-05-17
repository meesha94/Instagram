import { useState } from "react";
import { signUp } from "../utils";

export const LogForm = ({setUser}) => {
    const [username,setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        signUp(username, email, password);

    };

    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"/>
            <input onChange={(e) => setEmail(e.target.value)}/>
            <input onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Sign Up</button>
        </form>
    )
}