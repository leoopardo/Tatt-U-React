import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { NavBarSimple } from "../navsBar/navBarSimple";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import { useParams} from "react-router-dom"



function NewMessageForm() {
const {userId} = useParams();

    const { loggedInUser } = useContext(AuthContext);
    const [addNewMessage, setAddNewMessage] = useState({
        text: "",
        messageImg: "",
    });
    function handleAddPost(e) {
        setAddNewMessage({ ...addNewMessage, [e.target.name]: e.target.value });
    }
    const [img, setImg] = useState("");
    function handleImage(e) {
        setImg(e.target.files[0]);
        console.log(img);
    }
    async function handleUpload() {
        try {
            const uploadData = new FormData();
            uploadData.append("picture", img);
            const response = await api.post("/img/img/upload-image", uploadData);
            return response.data.url;
        } catch (err) {
            console.log(err);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const imgURL = await handleUpload();
            await api.post(`/chat/${id}`, {
                ...addNewMessage,
                messageImg: imgURL,
            });
            toast.success("Message created :)");
        } catch (err) {
            toast.error("Message not created :(");
            console.log(err);
        }
    }
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        async function getMessages() {
            try {
                const response = await api.get(`/chat/${userId}`);
                setMessages(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMessages();
    }, [userId]);
    return (
        <div className="messages-div">
            <div className="feed">
                <NavBarSimple>
                    <img
                        src={loggedInUser.user.profilePicture}
                        alt="profile_pic"
                        className="profilePic"
                    ></img>
                    <DropDownMenu>
                        <li>
                            <Link to="/feed">Feed</Link>
                        </li>
                        <li>
                            <hr />
                            <Link to="/schedule">Schedule</Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/edit-profile">Edit your Profile</Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/">Logout</Link>
                        </li>
                    </DropDownMenu>
                </NavBarSimple>
                <div>
                    {messages.map((c) => {
                        return(
                            <div>
                                {c.text}
                                {c.messageImg}
                            </div>
                        );
                    })}
                </div>
            </div>
            <form onSubmit={handleSubmit} className="form-forum">
                <div className="name-div">
                    <label htmlFor="text" className="">
                        <strong>Text: </strong>
                    </label>
                    <input
                        type="text"
                        className="input-text"
                        name="text"
                        id="text"
                        value={addNewMessage.text}
                        onChange={handleAddPost}
                    />
                </div>
                <div className="image-div">
                    <label htmlFor="messageImg" className="">
                        <strong>Image: </strong>
                    </label>
                    <input
                        type="file"
                        className="input-email"
                        id="messageImg"
                        name="messageImg"
                        value={addNewMessage.messageImg}
                        onChange={handleImage}
                    />
                </div>
                <button type="submit" className="post-button">
                    Send!
                </button>
            </form>
        </div>
    );
}
export default NewMessageForm;











