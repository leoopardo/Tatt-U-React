export function IsActive(props) {
    return ( 
        <ul className="box-ul">
                        {props.children}
                        <li>
                              <button onClick={props.function}>Logout</button>
                         </li>
                   </ul>
     );
}
