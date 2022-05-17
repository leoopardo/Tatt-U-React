import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import { NavBarSimple } from "../components/navsBar/navBarSimple";
import { DropDownMenu } from "../components/DropDownMenu/DropDownMenu";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import "../style/post-style.css"
import toast, { Toaster } from "react-hot-toast";

export function NewPost() {
    const navigate = useNavigate()
    const {loggedInUser} = useContext(AuthContext)
    const [post, setPost] = useState({
        desc: "",
        img: ""
    })
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState()

    function handleChange(e){
        setPost({...post, [e.target.name]: e.target.value})
        console.log(post.desc)
    }

    // Preview da imagem do post
    useEffect(() => {
        if(!image){
            setPreview(null)
            return
        }
        const objectUrl = URL.createObjectURL(image)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    // Handle do state de image
    function handleImage(e){
        if (!e.target.files || e.target.files.length === 0){
            setImage(null)
            return
        };
        setImage(e.target.files[0])
        console.log(image)
    }
    //Upload da imagem no claudinery
    async function handleUpload(){
        try{
            const uploadData = new FormData();
            uploadData.append("picture", image);

            const response = await api.post("/img/upload-image", uploadData);
            console.log(post)
            toast.success('Posted!')
            return response.data.url

        } catch(err){
            console.error(err)
            toast.error("Not posted :(")
        }
    }
  
    async function handleSubmit(e){
        e.preventDefault();
        try{
            const imgURL = await handleUpload();
            await api.post("/post/create", {...post, img: imgURL})
            
            navigate("/artist")
        } catch(err){
            console.log(err)
        }
    }

    
    return ( 
        <div className="feed">
        <div>   
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
        </div>
            <NavBarSimple>
                <img src={loggedInUser.user.profilePicture} alt="profile_pic" className="profilePic"></img>
                <DropDownMenu>
                <li>  
                    <Link to="/chat">Chat</Link> 
                </li>
                <li>
                <hr/>
                    <Link to="/artist">Feed</Link>
                </li>
                <li>
                <hr/>
                    <Link to="/schedule">schedule</Link> 
                </li>
                <hr/>
                 <li>
                    <Link to="/edit-profile" >Edit your Profile</Link>
                </li>
                <hr/>
                <li>
                    <Link to="/" >Logout</Link>
                </li>
                </DropDownMenu>
            </NavBarSimple>
            <div className="formPost">
                <form onSubmit={handleSubmit}>
                    <div className="postInput">
                        <label htmlFor="img" className="postImgLabel">Select your post image</label>
                        <input 
                        type="file"
                        name="img"
                        className="imagePost"
                        onChange={handleImage}
                        />
                        {image && <img src={preview} className="preview" alt={`${loggedInUser.user.name}Posts`}/>}
                    </div>
                    <div className="postInput">
                        <label htmlFor="desc">Description</label>
                        <input 
                        type="text"
                        name="desc"
                        value={post.desc}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Post!</button>
                </form>
            </div>
        </div>
    );
}