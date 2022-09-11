import React from 'react'
import "./navbar.css"
export default function NavBar() {
    return (
        <div className="topNav">
            <div className="topLeft"> </div>
            <div className="topCenter">
                <ul className="topNavList">
                    <li className="navListItem Home"> Home </li>
                    <li className="navListItem About"> About </li>
                    <li className="navListItem Contact"> Contact </li>
                    <li className="navListItem Write"> Write </li>
                    <li className="navListItem Logout"> Logout </li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topPfpImg" src="/images/icons/default_pfp.png" alt="profile" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>)
}