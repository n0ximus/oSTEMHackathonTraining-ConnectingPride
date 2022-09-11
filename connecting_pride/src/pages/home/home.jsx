import React from "react"
import "./home.css"
import Header from "../../header/header"
import SideBar from "../../sidebar/sidebar"
import Posts from "../../posts/posts"

export default function Home() {
    return (
        <>
         <Header />
            <div className="home">
                <SideBar />
                <Posts/>
            </div>
       </>
    )
}