import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { AuthContext } from "../contexts/authContext";
import "../components/style/login-style.css"
export function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()
    const {setLoggedInUser} = useContext(AuthContext)

    function handleChange(e){
        setLogin({...login, [e.target.name]: e.target.value})
        console.log(login)
    }
    async function handleSubmit(e){
        e.preventDefault();
        try {
           const response = await api.post("/user/login", login);
           setLoggedInUser({...response.data});

           localStorage.setItem("loggedInUser", JSON.stringify(response.data));
           
            navigate("/feed")
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <div className="loginPage">
        <NavBarSimple><h1>Tatt U</h1></NavBarSimple>
        <div className="formBox">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="labelEmail">Email</label>
                </div>
                    <input 
                    className="inputEmail"
                    name="email"
                    type="email"
                    placeholder="email"
                    value={login.email}
                    onChange={handleChange}
                    />
                    
                <div>
                    <label htmlFor="email" className="labelPassword">Password</label>
                </div>
                    <input 
                    className="inputPassword"
                    name="password"
                    type="password"
                    placeholder="password"
                    value={login.password}
                    onChange={handleChange}
                    />
                <div>
                    <button type="submit" className="loginButton">
                        Login
                    </button>
                </div>
            </form>
            </div>
        <Link to="/signup" className="DontHaveAnAccout">i dont have an account</Link>
        </div>
     );
}
