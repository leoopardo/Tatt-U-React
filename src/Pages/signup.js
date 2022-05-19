import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/signUp-style.css"
import { api } from "../api/api";
import toast, {Toaster} from "react-hot-toast";

export function Signup() {
    const navigate = useNavigate()
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
    const [img, setImg] = useState("");

    function handleChange(e){
        setSignUp({...signUp, [e.target.name]: e.target.value})
        console.log(signUp)
    }

    function handleImage(e){
        setImg(e.target.files[0])
        console.log(img)
    }
    async function handleUpload(){
        try{
            const uploadData = new FormData();
            uploadData.append("picture", img);

            const response = await api.post("/img/img/upload-image", uploadData);

            return response.data.url
        } catch(err){
            console.log(err)
        };
    }
    async function handleSubmit(e){
        e.preventDefault();
        try{
            const imgURL = await handleUpload();
            await api.post("/user/signup", {...signUp, profilePicture: imgURL})
            toast.success('Account created :)')
            navigate("/")
        } catch(err){
            toast.error("Account not created :(")
            console.log(err)
        }
    }
    return ( 
        <div className="loginPage">
        <div>   
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
        </div>
            <NavBarSimple><h1>Sign up</h1></NavBarSimple>
            <div className="formBox">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="role" className="labelYouAre">You Are:</label>
                    </div>
                    <select name="role" className="role" value={signUp.role} onChange={handleChange}>
                        <option value="">SELECT</option>
                        <option value="USER">USER</option>
                        <option value="ARTIST">ARTIST</option>
                    </select>
                    <div>
                        <label htmlFor="profilePicture" className="fileSelect">Select your photo</label>
                    </div>
                    <input 
                    name="profilePicture"
                    type="file"
                    id="formImg"
                    className="pictureInput"
                    onChange={handleImage}
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
                    <button type="submit">Create account</button>
                </form>
            </div>
        </div>
     );
}
