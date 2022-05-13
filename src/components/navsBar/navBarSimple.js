import "./style-modules.css"
export function NavBarSimple(props) {
    return ( 
        <nav className="simpleNav">
            <h1>{props.children}</h1>    
        </nav>
     );
}
