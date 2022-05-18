import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { Link } from "react-router-dom";
import { api } from "../api/api";
import "../style/search-style.css"


export function SearchNewArtist() {
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser)
    const [allArtists, setAllArtists] = useState([])
    console.log(allArtists)
    const [search, setSearch] = useState({
        country: "",
        city: "",
        state: "",
       });
    
    useEffect(() =>{
    async function getAllArtists(){
        try{
            const response = await api.get("/user");
            setAllArtists(response.data);
            } catch(err){
            console.log(err)
        }
    }
    getAllArtists()
    }, [])

    function handleChange(e){
        setSearch({...search, [e.target.name]: e.target.value})
        console.log(search)
    }
    
    
    return (
    <div className="feed">
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
        <div>
            <div>
                <input 
                    type="text"
                    name="country"
                    onChange={handleChange}
                    value={search.coutry}
                    placeholder="Coutry"
                />
                <input 
                    type='text'
                    name="city"
                    onChange={handleChange}
                    value={search.city}
                    placeholder="City"
                />
                <input 
                    type='text'
                    name="state"
                    onChange={handleChange}
                    value={search.state}
                    placeholder="State. (Exemple: SP)"
                />      
            </div>
            <div>
                {allArtists.filter((currentArtist) =>{
                    if(!search.country && !search.city && !search.state){
                        return currentArtist
                    }
                    if ((currentArtist.country.toLowerCase() === search.country.toLowerCase())){
                        if((currentArtist.city.toLowerCase() === search.city.toLowerCase())){
                            if((currentArtist.state.toLowerCase() === search.state.toLowerCase())){
                                return (currentArtist)
                            }
                            return (currentArtist)
                        }
                        return (currentArtist)
                    }
                    return ((currentArtist.country.toLowerCase() === search.country.toLowerCase()) ||
                    (currentArtist.city.toLowerCase() === search.city.toLowerCase()) ||
                    (currentArtist.state.toLowerCase() === search.state.toLowerCase()))
                }).map((currentArtist) =>{
                    
                    return (
                        <article className="AllArtist" >
                            <img src={currentArtist.profilePicture} alt={currentArtist.name} className="ArtistCardImg" style={{border: `5px solid ${currentArtist.online}`}} />
                            <h2>{currentArtist.name}</h2>
                            <p>{`lives in ${currentArtist.country}, ${currentArtist.city}-${currentArtist.state}`} </p>
                        </article>
                    )
                })}
            </div>
            
        </div>
    </div>
    )
}

