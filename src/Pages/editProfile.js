import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { api } from "../api/api";
import toast from "react-hot-toast";

export function EditProfile() {
    const navigate = useNavigate()
    const { loggedInUser } = useContext(AuthContext)
    const [editProfile, SetEditProfile] = useState({
        name: "",
        email: "",
        password: "",
        profilePicture: "",
        city: "",
        country: "",
        state: "",
        contact: ""
    })

    useEffect(()=>{
        async function fetchUser(){
            const response = await api.patch("/user/update-user-profile");
            SetEditProfile({...response.data})
        }
        fetchUser()

    },[])

    

    const [img, setImg] = useState("");

    function handleChange(e){
        SetEditProfile({...editProfile, [e.target.name]: e.target.value})
        console.log(editProfile)
    }

    function handleImage(e){
        setImg(e.target.files[0])
        console.log(img)
    }
    async function handleUpload(){
        try{
            const uploadData = new FormData();
            uploadData.append("picture", img);

            const response = await api.post("/img/upload-image", uploadData);

            return response.data.url
        } catch(err){
            console.log(err)
        };
    }
    function isArtist(){
        if(loggedInUser.user.role === "ARTIST"){
            navigate("/artist");
        } else{
            navigate("/feed")
        }
    }
    async function handleSubmit(e){
        e.preventDefault();
        try{
            const imgURL = await handleUpload();
            const response = await api.patch("/user/update-user-profile", editProfile);
            SetEditProfile({...response.data, profilePicture: imgURL})            
            toast.success('Account updated :)')
            navigate("/")
        } catch(err){
            toast.error("Account not created :(")
            console.log(err)
        }
        isArtist()
    }
    return (
        <div className="feed">
            <NavBarSimple>
                <img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic" />
            </NavBarSimple>
            <div className="formBox">
                <form onSubmit={handleSubmit}>
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
                    value={editProfile.name}
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
                    value={editProfile.email}
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
                    value={editProfile.country}
                    onChange={handleChange}
                    />
                    <div>
                         <input 
                        name="city"
                        type="text"
                        className="signUpInputCity"
                        placeholder="City"
                        value={editProfile.city}
                        onChange={handleChange}
                        />
                        <input 
                        name="state"
                        type="text"
                        className="signUpInputState"
                        placeholder="State"
                        value={editProfile.state}
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
                    value={editProfile.password}
                    onChange={handleChange}
                    />
                    <button type="submit">Make Changes</button>
                </form>
            </div>
        </div>
    


    
    );
}
