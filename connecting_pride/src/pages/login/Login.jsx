import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="email" />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="password" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginCreateAccountButton">Create an Account</button>
        </div>
    );
}