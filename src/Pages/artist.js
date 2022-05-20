import {useContext, useEffect, useState } from "react";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import "../style/feed-style.css"
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { PostCard } from "../components/postCard/postCard";

export function Artist() {
    const [allPosts, setAllPosts] = useState([]);
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser);
    useEffect(() => {
     async function getPosts(){
        const response = await api.get(`/post/profile/${loggedInUser.user._id}`)
        setAllPosts(response.data)
     };
     getPosts();
    
    }, [loggedInUser.user._id])
    console.log(allPosts)
    

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
                <Link to="/schedule">Schedule</Link> 
            </li>
            <hr/>
            <li>
                <Link to="/edit-profile" >Edit your Profile</Link>
            </li>
            <hr/>
            
            </DropDownMenu>
            </NavBarSimple>
            <div className="AllPosts">
                {allPosts.map((currentPost) => {
                    return(
                        <PostCard
                        api={api}
                        id={currentPost._id}
                        ProfileImg={loggedInUser.user.profilePicture}
                        UserName={loggedInUser.user.name}
                        date={currentPost.createdAt}
                        PostImg={currentPost.img}
                        Description={currentPost.desc}
                        />
                    )
                })}
            </div>
        </div>
     );
}