import { useContext, useEffect, useState } from "react";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import "../style/feed-style.css"
import { api } from "../api/api";


export function Followings() {
    const { loggedInUser } = useContext(AuthContext);

    const [user, setUser] = useState([])

    useEffect(() =>{
        async function getUser(){
            const response = await api.get("/user/profile")
            setUser(response.data.followings)
        }
        getUser()
    }, [])
   


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
            </DropDownMenu>
        </NavBarSimple>
            <div>
                {user.map((currentArtist) =>{
                    return(
                        <article className="AllArtist" >
                            <div className="imageDiv">
                                <img src={currentArtist.profilePicture} alt={currentArtist.name} className="ArtistCardImg" style={{border: `5px solid ${currentArtist.online}`}} />
                            </div>
                            <div className="nameDiv">
                                <Link to={`/${currentArtist._id}`} style={{textDecoration: "none", color: "#303030"}}><h2>{currentArtist.name}</h2></Link>
                            </div>

                            <p className="address">{`lives in ${currentArtist.country}, ${currentArtist.city}-${currentArtist.state}`} </p>
                        </article>
                    )
                })}
            </div>
        </div>
    
    );
}

