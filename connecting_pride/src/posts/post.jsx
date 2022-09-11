import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImage"
                src="/images/default_post_image.png"
                alt=""
            />
            <div className="postAbstracts">
                <div className="postPrides">
                    <span className="postPride"> Music</span>
                    <span className="postPride"> Life</span>
                </div>
                <span className="postTitle"> hefehjferrfejrf</span>
                <hr />
                <span className="postDate"> 5 days ago </span>
            </div>
        </div>

    )
}