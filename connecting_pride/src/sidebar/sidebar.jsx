import "./sidebar.css"
export default function SideBar() {
    return (
        < div className = "sidebar" >
            <div className="sideBarItems">
                <div className = "sideBarItem">
                <span className="sideBarTitle"> About oSTEM </span>
                <img src="/images/ostem_logo_1.png" alt="logo" />
                <p>
                    description
                </p>

                </div>
                <div className="sideBarItem">
                    <span className="sideBarTitle"> Categories </span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                                Resources
                        </li>
                        <li className="sidebarListItem">
                                History
                        </li>
                        <li className="sidebarListItem">
                                Events
                        </li>
                        <li className="sidebarListItem">
                                News
                        </li>
       
                    </ul>

                    </div>
            </div>
            
        </div >
    )
}