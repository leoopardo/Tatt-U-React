import {useContext } from "react";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import "../style/feed-style.css"
import { Link } from "react-router-dom";

export function Artist() {
    const { loggedInUser } = useContext(AuthContext)
    console.log(loggedInUser)
    return ( 
        <div className="feed">
        <NavBarSimple>
            <img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"></img>
            <DropDownMenu>
            <li>
    
                <Link to="/new-post">New Post</Link> 
            </li>
            <li>
            <hr/>
                <Link to="/chat">Chat</Link>
            </li>
            <li>
            <hr/>
                <Link to="/schedule">schedule</Link> 
            </li>
        
            
            </DropDownMenu>
        </NavBarSimple>

        </div>
     );
}