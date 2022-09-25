import React from "react"
import "./uniquePost.css"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function UniquePost() {
    const PF = "http://localhost:3001/images/";
    const location = useLocation();
    const path = location.pathname.split("/")[2]; /* gets the post id */
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    /*
     * gets the current specified post to display its data to the screen
     * keeps the post updated post on the screen
     * */
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        };
        getPost();
    }, [path]);


    /*
     * deletes a specified post
     * */
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/"); /* go back to home page */
        } catch (err) { }
    };

    /* 
     * handles updating a post 
     * */
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                description,
            });
            setUpdateMode(false)
        } catch (err) { }
    };

    return (
        <>
            <div className="uniquePost">


                <div className="uniquePostWrapper">
                    <h1 className="uniquePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="editPost">
                                <i
                                    className="postIcon far fa-edit"
                                    onClick={() => setUpdateMode(true)}
                                ></i>
                                <i
                                    className="postIcon far fa-trash-alt"
                                    onClick={handleDelete}
                                ></i>
                            </div>
                        )}
                    </h1>

                    {post.photo && (
                        <img src={PF + post.photo} alt="post image" className="uniquePostImage" />
                    )}


                    <div className="uniquePostInfo">
                        <span className="uniquePostAuthor">            Author:
                            <Link to={`/?user=${post.username}`} className="link">
                                <b> {post.username}</b>
                            </Link>
                        </span>
                        <span className="uniquePostDate">             {new Date(post.createdAt).toDateString()}
                        </span>

                    </div>

                    {updateMode ? (
                    <textarea
                            className="uniquePostDescriptionInput"
                        value={description  }
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    ) : (
                    <p className="uniquePostDescription">{description}</p>
                    )}

                    {updateMode && (
                        <button className="uniquePostButton" onClick={handleUpdate}>
                            update
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}