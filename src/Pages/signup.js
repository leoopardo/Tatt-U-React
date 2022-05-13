import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/signUp-style.css"

export function Signup() {
    const [signUp, setSignUp] = useState({
        name: "",
        email: "",
        password: "",
        profilePicture: "",
        city: "",
        country: "",
        state: "",
        contact: "",
        role: ""
    })
    function handleChange(e){
        setSignUp({...signUp, [e.target.name]: e.target.value})
        console.log(signUp)
    }
    return ( 
        <div className="loginPage">
            <NavBarSimple><h1>Sign up</h1></NavBarSimple>
            <div className="formBox">
                <form>
                    <div>
                        <label htmlFor="role" className="labelYouAre">You Are:</label>
                    </div>
                    <select name="role" className="role" value={signUp.role} onChange={handleChange}>
                        <option value="USER">USER</option>
                        <option value="ARTIST">ARTIST</option>
                    </select>
                    <div>
                        <label htmlFor="profilePicture" className="fileSelect">Select your photo</label>
                    </div>
                    <input 
                    name="profilePicture"
                    type="file"
                    className="pictureInput"
                    />
                    <div>
                        <label htmlFor="email" className="signUpLabelEmail">You name</label>
                    </div>
                    <input 
                    name="name"
                    type="text"
                    className="signUpInputEmail"
                    placeholder="Name"
                    value={signUp.name}
                    onChange={handleChange}
                    />
                    <div>
                        <label htmlFor="email" className="signUpLabelEmail">Email</label>
                    </div>
                    <input 
                    name="email"
                    type="email"
                    className="signUpInputEmail"
                    placeholder="Email"
                    value={signUp.email}
                    onChange={handleChange}
                    />

                    <div>
                        <label htmlFor="country" className="signUpLabelCountry">Your Address</label>
                    </div>
                    <input 
                    name="country"
                    type="text"
                    className="signUpInputCountry"
                    placeholder="Country"
                    value={signUp.country}
                    onChange={handleChange}
                    />
                    <div>
                         <input 
                        name="city"
                        type="text"
                        className="signUpInputCity"
                        placeholder="City"
                        value={signUp.city}
                        onChange={handleChange}
                        />
                        <input 
                        name="state"
                        type="text"
                        className="signUpInputState"
                        placeholder="State"
                        value={signUp.state}
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="signUpLabelCountry">Password</label>
                    </div>
                    <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="signUpInputCountry"
                    value={signUp.password}
                    onChange={handleChange}
                    />
                </form>
            </div>
        </div>
     );
}
