import { useContext, useEffect, useState } from "react";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { Link } from "react-router-dom";
import "../style/feed-style.css"
import { PostCard } from "../components/postCard/postCard";
import { api } from "../api/api";


export function Feed() {
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser)
    const [followingArtists, setFollowingArtists] = useState([])
    useEffect(() => {
        async function fetchFollowings(){
           const response = await api.get(`/user/following-artists`)
           setFollowingArtists(response.data)
        };
        fetchFollowings();
       }, [loggedInUser.user.followings]);
       console.log(followingArtists)
    return (
        <div>
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
        <div>
        {followingArtists.map((c) => {
                return (
                    <div>
                    {c.followings.map((currentPost) => {
                        return (
                            <PostCard
                        key={currentPost._id}
                        post={currentPost}
                        />
                        );
                    })}
                    </div>
                );
            })}
        </div>
        </div>
     );
}