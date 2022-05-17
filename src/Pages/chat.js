import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";

export function Chat() {
    const {loggedInUser} = useContext(AuthContext)
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
                    <Link to="/artist">Feed</Link>
                </li>
                <li>
                    <hr/>
                    <Link to="/schedule">schedule</Link> 
                </li>
                </DropDownMenu>
            </NavBarSimple>
            
            {/* {loggedInUser.user.chat.map((currentChat) => {
                return(
                    <Link to={`/chat/:${currentChat.name}`}>
                        <article>
                            <img src="" alt="" />
                            <h2>{currentChat.name}</h2>
                        </article>
                    </Link>
                )
            })} */}
        </div>
    );
}

