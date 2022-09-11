import React from 'react'
import "./header.css"
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles" >
                <span className="headerTitle2"> Connecting Pride </span>
                <span className="headerTitle1"> Articles </span>
                <img className="headerImg" src="/images/background.png" alt="header" />
            </div>
        </div>
    )
}