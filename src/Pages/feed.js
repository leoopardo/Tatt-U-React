import { useContext } from "react";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../api/api";
import { PostCard } from "../components/postCard/postCard";
import "../style/feed-style.css"

export function Feed() {
    const { loggedInUser } = useContext(AuthContext);

    const [user, setUser] = useState([])

    useEffect(() =>{
        async function getUser(){
            const response = await api.get("/user/profile")
            setUser(response.data.followings)
        }
        getUser()
    }, [])
    console.log(user)

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
                <Link to="/edit-profile" >Edit your Profile</Link>
            </li>
            <hr/>
        </DropDownMenu>
        </NavBarSimple>  
        <div className="userFeed">
            {user.map((currentUser) => {
                return(
                    <div>
                        {currentUser.post.map((post) =>{
                            return(
                                <PostCard
                                    ProfileImg={currentUser.profilePicture}
                                    UserName={<Link to={`/chat/${currentUser._id}`}>{currentUser.name}</Link>}
                                    PostImg={post.img}
                                    Description={post.desc}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
        </div>
     );
}
