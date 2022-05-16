import { useContext } from "react";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import "../components/style/login-style.css"
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";

export function Feed() {
    const { loggedInUser } = useContext(AuthContext);
    console.log(loggedInUser)




    return ( 
        <>
        <NavBarSimple>
        <img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic" />
        <DropDownMenu></DropDownMenu>
        </NavBarSimple>
        </>
     );
}
