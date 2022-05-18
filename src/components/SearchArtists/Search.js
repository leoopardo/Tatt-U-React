import { useEffect, useState } from "react";
import { api } from "../../api/api";
export function SearchArtists() {
    const [allArtists, setAllArtists] = useState([])
    const [search, setSearch] = useState({
        coutry: "",
        city: "",
        state: "",
    })
    useEffect(() =>{
        async function getAllArtists(){
            const response = await api.get("/user/AllArtists");
            setAllArtists(response.data);
        }
    })
    function handleChange(e){
        setSearch({...search, [e.target.name]: e.target.value})
        console.log(search)
    }
    return ( 
        <div>
            <div>
                <input 
                    name="coutry"
                    onChange={handleChange}
                    value={search.coutry}
                    placeholder="Coutry"
                />
                <input 
                    name="city"
                    onChange={handleChange}
                    value={search.city}
                    placeholder="City"
                />
                <input 
                    name="state"
                    onChange={handleChange}
                    value={search.state}
                    placeholder="State. (Exemple: SP)"
                />      
            </div>
            <div>
                {allArtists.map((currentArtist) =>{
                    return (
                        <article>
                            <img src={currentArtist.profilePicture} alt={currentArtist.name}/>
                            <h5>{currentArtist.name}</h5>
                            <p>{`lives in ${currentArtist.coutry}, ${currentArtist.city}-${currentArtist.state}`} </p>
                        </article>
                    )
                }).filter(allArtists.includes(search.coutry || search.city || search.state))}
            </div>
            
        </div>
     );
}
