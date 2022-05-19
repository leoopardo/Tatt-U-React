import "./post-style.css"
import toast, {Toaster} from "react-hot-toast"
import { api } from "../../api/api";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function PostCard({ post }) {



    const { loggedInUser } = useContext(AuthContext);


    function Reload(){
        window.location.reload()
    }
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});


    useEffect(() => {
        setIsLiked(post.likes.includes(loggedInUser.user._id));
      }, [loggedInUser.user._id, post.likes]);

      useEffect(() => {
        const fetchUser = async () => {
          const res = await api.get(`/user/${post.userId}`);
          setUser(res.data);
        };
        fetchUser();
      }, [post.userId]);


      const likeHandler = () => {
        try {
          api.put(`/post/like/${post._id}` , { userId: loggedInUser.user._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };
      
      

    async function HandleDelete(){
        try{
            await api.delete(`/post/delete-post/${post._id}`)
            toast.success('Post deleted') 
            console.log(post.id)
            setTimeout(Reload, 1000)
        } catch(err){
            toast.error('Can not delete the post, try again later') 
            console.log(err)
        }     
    }
    
    return ( 
        <div className="Post">
        <div>   
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
        </div>
            <div className="PostHeader">
                <img src={`${user.profileImg}`} alt={`${user.name}ProfileImage`} className="PostProfile"/>
                <h5>{user.UserName}</h5>
               
                
            </div>
            <div>
                <img src={`${post.img}`} alt={`${post.desc}Posts`} className="PostImage"/>
                <p className="Description">{post.Description}</p>
            </div>
            <div>
            <button
              className="likeIcon"             
              onClick={likeHandler}
              
            >{post.likes.length}</button>
             <button onClick={HandleDelete}>Delete</button>
            </div>
            
        </div>
     );
}

