import React from "react"
import "./home.css"
import Header from "../../components/header/header"
import SideBar from "../../components/sidebar/sidebar"
import Posts from "../../components/posts/posts"
import { useLocation } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
         <Header />
            <div className="home">
                <SideBar />
                <Posts posts={posts}/>
            </div>
       </>
    )
}