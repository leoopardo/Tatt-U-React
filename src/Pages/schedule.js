import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { useState } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";
import 'react-calendar/dist/Calendar.css';

export function  Schedule() {
    const [value, onChange] = useState(new Date());
    const {loggedInUser} = useContext(AuthContext)
 
    return ( <div className="feed">
        <NavBarSimple>
            <img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"/>
        </NavBarSimple>
        <Calendar onChange={onChange} value={value}/>
    </div> );
}
