import './sidebar.css'
import {Link} from "react-router-dom";

const Sidebar=()=>{
    const sidebarPages = [
        {
            page: "Home",
            icon: "home",
            link:"/notes"
        },
        {
            page: "Lables",
            icon: "tags",
            link:"/lables"
        },
        {
            page:"Archive",
            icon:"archive",
            link:"/archive"
        },
        {
            page: "Trash",
            icon: "trash",
            link:"/trash"
        },
       

    ]
    return (
        <div className="sidebar-container">
        <aside className="lib-sidebar">
            <ul>
                {sidebarPages.map(({page, icon,link}) => (
                    <Link to={`${link}`}><li><i className = {`sidebar-icon fas fa-${icon}`}></i><span>{page}</span></li></Link>
                ))}
            </ul>
        </aside>
        </div>
    )
} 

export default Sidebar