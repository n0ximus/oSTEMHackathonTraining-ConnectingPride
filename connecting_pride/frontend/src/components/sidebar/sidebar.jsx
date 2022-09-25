import "./sidebar.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
    const [categories, setCategories] = useState([]);


    /* 
     * get most updated list of categories
     * */
    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get("/categories");
            setCategories(res.data);
        };
        getCategories();
    }, []);


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
                    <ul className="sidebarList">
                        {categories.map((c) => (
                            <Link to={`/?category=${c.name}`} className="link">
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}