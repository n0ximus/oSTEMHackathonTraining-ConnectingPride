import React from "react"
import "./home.css"
import Header from "../../components/header/header"
import SideBar from "../../components/sidebar/sidebar"
import Posts from "../../components/posts/posts"

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