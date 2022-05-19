import { useContext } from "react";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";
export function Followings() {
    const { loggedInUser } = useContext(AuthContext);
    const [followings, setFollowings] = useState([]);
    useEffect(() => {
            async function fetchFollowings() {
                const response = await api.get(
                    `/followings/${loggedInUser.user._id}`
                );
                setFollowings(...response.data);
            }
            fetchFollowings();
        }, []);
        console.log(followings)
    console.log(loggedInUser)
    return (
       <div>
       <div className="nav-container" >
        <NavBarSimple> <img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"></img>
            <DropDownMenu>
            <li>
                <Link to="/feed">Feed</Link>
            </li>
            <li>
                <Link to="/search">Search new artists</Link>
            </li>
            <li>
                <Link to="/chat">Chat</Link>
            </li>
            </DropDownMenu>
        </NavBarSimple>
        </div>
        <div className="following-feed">
            {followings.followings.map((c) => {
                return (
                    <div>
                        <img src={c.profilePicture} alt=""/>
                        <p>{c.name}</p>
                    </div>
                );
            })}
        </div>
    </div>
    );
}