import React from "react"
import SideBar from "../../components/sidebar/sidebar"
import UniquePost from "../../components/uniquePost/uniquePost"
import "./postPage.css"
export default function PostPage() {
    return (
        <>
            <div className="postPage">
                <SideBar />
                <UniquePost/>
            </div>
        </>
    )
}