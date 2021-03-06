import "../../style/DropDownMenu-style.css";
import navicon from "../../images/navicon.png";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IsActive } from "./DropActive";

export function DropDownMenu(props) {
    const dropDpwnRef =  useRef(null);
    const [isActive, SetIsActive] = useState(false);
    const onClick = () => SetIsActive(!isActive);
    const navigate = useNavigate()
    function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        navigate("/");
      }
    console.log(isActive)
    function notActive(){
         if( isActive === true){
              return(<IsActive function={handleLogOut}>
               {props.children}
               </IsActive>)
         } else{ 
              return
          }
    }

    return ( 
          <div className="menu-container">
               <button onClick={onClick} className="menu-button">
                    <img src={navicon} alt="icone de navbar" className="nav-icon" />
               </button>
               <nav ref={dropDpwnRef}
                 className={`menu ${isActive ? "active" : "inactive"}`}>
                   {notActive()}
               </nav>
            </div>

     );
}

