import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { Link } from "react-router-dom";
//import "../style/DropDownMenu-style.css"

export function SearchNewArtist() {
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser)


    return (
    <div className="container">
        <NavBarSimple><img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"></img>
        <DropDownMenu>
            <li>
                <Link to="/feed">Feed</Link> 
            </li>
            <li>
                <Link to="/followings">Following</Link>
            </li>
            <li>
                <Link to="/chat">Chat</Link>
            </li>
        </DropDownMenu>
        </NavBarSimple>  
    </div>
    )
}

