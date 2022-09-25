import "./writePost.css"
import axios from "axios";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";


export default function WritePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);


    /* create a new post */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description,
        };
        console.log("posting")
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            console.log("axious post")
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) { }
    };
    return (
        <>
            <div className="writePost">
                {file && (
                    <img className="writeImage" src={URL.createObjectURL(file)} alt="" />
                )}

                <form className="writePostForm" onSubmit={handleSubmit}>
                    <div className="writePostGroup">

                        <input
                            type="text"
                            placeholder="title"
                            className="writePostInput"
                            autoFocus={true}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <label htmlFor="fileInput">
                            <i class="writePostIcon fa-duotone fa-plus"></i>                            </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>

                    <div className="writePostGroup">
                        <textarea
                            placeholder="type here"
                            type="text"
                            className="writePostInput writePostText"
                            onChange={e => setDescription(e.target.value)}
                        ></textarea>
                        <br />

                    </div>
                <button className="writePostSubmit" type="submit"> Post </button>

                </form>

            </div>

        </>
    );

}