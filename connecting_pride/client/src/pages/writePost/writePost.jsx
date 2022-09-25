import "./writePost.css"

export default function WritePost() {
    return (
        <>
            <div className="writePost">
                <img
                    className="writeImage"
                    src="/images/default_post_image.png"
                    alt=""
                />
                <form className="writePostForm">
                    <div className="writePostGroup">

                        <input type="text" placeholder="title" className="writePostInput" autoFocus={true}/>

                        <label htmlFor="fileInput">
                            <i class="writePostIcon fa-duotone fa-plus"></i>                            </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />




                    </div>

                    <div className="writePostGroup">
                        <textarea type="text" placeholder="type here..." className="writePostInput writePostText"></textarea>
                        <br />

                    </div>

                </form>
                <button className="writePostSubmit"> Post </button>

            </div>

        </>
    );

}