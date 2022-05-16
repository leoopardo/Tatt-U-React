import "../../style/DropDownMenu-style.css";
import navicon from "../../images/navicon.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export function DropDownMenu() {
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
                        <li>
                            <Link to="/search">Search new artists</Link> 
                        </li>
                        <li>
                            <Link to="/followings">Following</Link>
                        </li>
                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>
                    </ul>
               </nav>
            </div>

     );
}

