import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import NewMessageForm from "../components/Messages/Messages";
import { useEffect, useState } from "react";
import { api } from "../api/api";











export function Chat(props) {
  


    return ( 
        <div className="feed">
            <NewMessageForm id={props} />
            
        </div>
    );
}

