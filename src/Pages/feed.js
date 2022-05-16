import { useContext } from "react";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import "../style/feed-style.css"
import { Link } from "react-router-dom";

export function Feed() {
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser)




    return ( 
        <div className="feed">
        <NavBarSimple><img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"></img>
        <DropDownMenu>
             <li>
                <Link to="/search">Search new artists</Link> 
            </li>
            <li>
                <Link to="/followings">Following</Link>
            </li>
            <li>
                <Link to="/chat">Chat</Link>
            </li></DropDownMenu>
        </NavBarSimple>   
        </div>
     );
}
