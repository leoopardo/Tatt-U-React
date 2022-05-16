import {useContext } from "react";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import "../style/feed-style.css"

export function Artist() {
    const { loggedInUser } = useContext(AuthContext)
    console.log(loggedInUser)
    return ( 
        <div className="feed">
        <NavBarSimple><img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"></img></NavBarSimple>
            
        </div>
     );
}