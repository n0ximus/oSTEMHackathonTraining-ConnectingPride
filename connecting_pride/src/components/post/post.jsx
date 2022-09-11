import "./post.css"

export default function Post() {
    return (
            <div className="post">
                <img className="postImage"
                src="/images/default_post_image.png"
                    alt=""
                />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat"> Cat1 </span>
                        <span className="postCat"> Cat2 </span>
                    </div>
                    <span className="postTitle"> Title </span>
                    <span className="postDate"> Date Posted </span>
                <hr />

            </div>
            <p className="postSummary">
                Post Summary
            </p>
            </div>

    )
}