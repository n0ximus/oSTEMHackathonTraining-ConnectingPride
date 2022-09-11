import "./sidebar.css"
export default function SideBar() {
    return (
        < div className="sideBar" >
            <div className="sideBarItems">
                <div className="sideBarItem">
                    <span className="sideBarTitle"> About oSTEM </span>
                    <img src="/images/ostem_logo_1.png" alt="logo" />
                    <p className="sideBarAbout">
                        In a space where LGBTQ+ identities are often overlooked, Cal Poly's oSTEM chapter strives to create a welcoming community for queer engineers and scientists inside and outside of class. Through professional events, discussions between industry members and students, community spaces, outreach to local organizations and schools, and other forms of networking among the LGBTQ+ community, our oSTEM chapter will foster a more comfortable and inclusive space for queer people in STEM.
                    </p>
                </div>
                <div className="sideBarItem">
                    <span className="sideBarTitle"> Categories </span>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            Resources
                        </li>
                        <li className="sideBarListItem">
                            History
                        </li>
                        <li className="sideBarListItem">
                            Events
                        </li>
                        <li className="sideBarListItem">
                            News
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}