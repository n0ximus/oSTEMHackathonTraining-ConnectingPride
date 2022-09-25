import SideBar from "../../components/sidebar/sidebar"
import "./settings.css"
export default function Settings() {
    return (
        <>
            <div className="settings">
                <SideBar />

                <div className="settingsWrapper">

                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Edit Account</span>

                        <span className="settingsDeleteAccount">Delete Account</span>
                        <form className="settingsForm">
                            <label> Profile Picture </label>

                            <div className="settingsPfp">
                                <img
                                    src="/images/icons/default_pfp.png"
                                    alt=""
                                />
                                <label htmlFor="fileInput">
                                    <i className="settingsPfpIcon fa-solid fa-upload"></i>{" "}
                                </label>
                                <input
                                    id="fileInput"
                                    type="file"
                                    style={{ display: "none" }}
                                    className="settingsPfpInput"
                                />
                            </div>
                            <label>Username</label>
                            <input type="text" placeholder="username" name="name" />
                            <label>Email</label>
                            <input type="email" placeholder="example@gmail.com" name="email" />
                            <label>Password</label>
                            <input type="password" placeholder="password" name="password" />
                            <button className="settingsUpdate" type="submit">
                                Update
                            </button>
                        </form>



                    </div>
                </div>
            </div>
        </>
    )
}