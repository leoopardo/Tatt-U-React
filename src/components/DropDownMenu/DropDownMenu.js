import "../../style/DropDownMenu-style.css";
import navicon from "../../images/navicon.png";
import { useRef, useState } from "react";

export function DropDownMenu(props) {
    const dropDpwnRef =  useRef(null);
    const [isActive, SetIsActive] = useState(false);
    const onClick = () => SetIsActive(!isActive);

    console.log(isActive)

    return ( 
          <div className="menu-container">
               <button onClick={onClick} className="menu-button">
                    <img src={navicon} alt="icone de navbar" className="nav-icon" />
               </button>
               <nav ref={dropDpwnRef}
                 className={`menu ${isActive ? "active" : "inactive"}`}>
                   <ul className="box-ul">
                        {props.children}
                   </ul>
               </nav>
            </div>

     );
}

