import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";
export default function NavBar() {
    const user = false;

    return (
        <div className="topNav">
            <div className="topLeft"> </div>
            <div className="topCenter">
                <ul className="topNavList">
                    <li className="navListItem Home">



                        <Link className="link" to="/">
                            Home
                        </Link>


                    </li>
                    <li className="navListItem About"> About </li>
                    <li className="navListItem Contact"> Contact </li>
                    <li className="navListItem Write">             <Link className="link" to="/write">
                        Write
                    </Link> </li>
                    {user && <li className="navListItem Logout">Logout</li>}
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img className="topPfpImg" src="/images/icons/default_pfp.png" alt="profile" />

                    </Link>
                ) : (
                    <ul className="topList">
                            <li className="navListItem Logout">
                            <Link className="link" to="/login">
                                Login
                            </Link>
                        </li>
                            <li className="navListItem  Write">
                            <Link className="link" to="/createAccount">
                                Create Account
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

        </div>)
}