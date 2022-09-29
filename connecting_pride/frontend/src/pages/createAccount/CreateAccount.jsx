import "./createAccount.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function CreateAccount() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    /*
     * handle adding the new account to mongodb
     * */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/createAccount", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login"); /* go to login area */
        } catch (err) {
            console.log("err")
            setError(true);
        }
    };

    return (
        <div className="createAccount">
            <span className="createAccountTitle">Register</span>
            <form className="createAccountForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="createAccountInput" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input className="createAccountInput" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="createAccountInput" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <button className="createAccountButton" type="submit">Create Account</button>
            </form>
            <button className="createAccountLoginButton">
                <Link className="link" to="/login">
                    Login </Link></button>
            {error && <span style={{ color: "red", marginTop: "40px" }}>Can't create account :(</span>}

        </div>
    )
}