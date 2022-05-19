import { useContext, useEffect, useState } from "react";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import "../style/feed-style.css"
import { api } from "../api/api";
import { UnfollowButton } from "../components/UnfollowButton/UnfollowButton";


export function Followings() {
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser);;
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
        <NavBarSimple> <img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"></img>
            <DropDownMenu>
            <li>
                <Link to="/feed">Feed</Link> 
            </li>
            <hr/>
            <li>
                <Link to="/search">Search new artists</Link>
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
            <div>
                {user.map((currentArtist) =>{
                    return(
                        <div>
                        <article className="AllArtist">
                            <img src={currentArtist.profilePicture} alt={currentArtist.name} className="ArtistCardImg" />
                            <h5>{currentArtist.name}</h5>
                            <p>{`lives in ${currentArtist.country}, ${currentArtist.city}-${currentArtist.state}`} </p>
                        </article>
                        <UnfollowButton _id={currentArtist._id}/>
                        </div>
                    )
                })}
            </div>
        </div>
    
    );
}