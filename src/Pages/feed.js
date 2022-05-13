import { useEffect, useState, useContext } from "react";
import {api} from "../api/api"
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";

export function Feed() {
    return ( 
        <>
        <NavBarSimple>Tatt U</NavBarSimple>
        </>
     );
}
