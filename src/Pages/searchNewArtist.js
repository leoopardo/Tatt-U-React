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
            <hr/>
            <li>
                <Link to="/followings">Following</Link>
            </li>
            <hr/>
            <li>
                <Link to="/chat">Chat</Link>
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
    )
}

