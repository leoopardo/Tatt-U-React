import { useContext } from "react";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { Link } from "react-router-dom";
import "../style/feed-style.css"

export function Feed() {
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser)




    return ( 
        <div className="feed">
        <NavBarSimple>
        <img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"></img>
        <DropDownMenu>
            <li>
                <Link to="/search">Search new artists</Link> 
            </li>
            <li>
            <hr/>
                <Link to="/followings">Following</Link>
            </li>
            <li>
            <hr/>
                <Link to="/chat">Chat</Link>
            </li>
            <hr/>
            <li>
                <Link to="/schedule">Schedule</Link> 
            </li>
            <hr/>
            <li>
                <Link to="/edit-profile" >Edit your Profile</Link>
            </li>
            <hr/>
            <li>
                <Link to="/" >Logout</Link>
            </li>
            
        </DropDownMenu>
        </NavBarSimple>   
        </div>
     );
}
