import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context, ContextProvider } from "../../context/Context";
import { LoginFailure, LoginStart, LoginSuccess } from "../../context/Actions"

export default function Login() {
    return (
        <>
        <ContextProvider>
            <MyForm />
                </ContextProvider>
                </>
  ) };


const MyForm = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    /*
     * handle logging in (if it is sucessful, failure, etc)
     * */
    const handleSubmit = async (e) => {
        console.log("handling submit")
        e.preventDefault();
        dispatch(LoginStart());
        console.log("dispatch called")

        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });

            dispatch(LoginSuccess(res.data))
        } catch (err) {
            dispatch(LoginFailure())
        }
    };
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="username"
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="password"
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginCreateAccountButton">
                <Link className="link" to="/createAccount">
                    Create an Account
                </Link></button>
        </div>
    );
}