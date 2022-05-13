import { NavBarSimple } from "../components/navsBar/navBarSimple";

export function Signup() {
    return ( 
        <div className="loginPage">
            <NavBarSimple><h1>Sign up</h1></NavBarSimple>
            <div className="formBox">
                <form>
                    <select>
                        <option>Client</option>
                        <option>Artist</option>
                    </select>
                    <input name="profilePicture" type="file"/>
                </form>
            </div>
        </div>
     );
}
