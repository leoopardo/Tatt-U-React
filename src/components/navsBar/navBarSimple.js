import "./style-modules.css"
export function NavBarSimple(props) {
   
    return (         
        <nav className="simpleNav">
        {props.children}
        </nav>
     );
}
