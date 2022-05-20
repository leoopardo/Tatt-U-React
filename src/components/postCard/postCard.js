import "./post-style.css"
import toast, {Toaster} from "react-hot-toast"
import DeleteIcon from "../../images/delete-icon.png"

export function PostCard(props) {
    function Reload(){
        window.location.reload()
    }
    async function HandleDelete(){
        try{
            if(window.confirm("Do you want to delete this post?")){
               await props.api.delete(`/post/delete-post/${props.id}`)
                toast.success('Post deleted') 
                console.log(props.id)
                await setTimeout(Reload, 1000) 
            }
            
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
                <img src={`${props.ProfileImg}`} alt={`${props.UserName}ProfileImage`} className="PostProfile"/>
                <h5>{props.UserName}</h5>
                <button onClick={HandleDelete} className="deleteButton"><img src={DeleteIcon} alt= "delete" className="deleteIcon"/></button>    
            </div>
            <div>
                <img src={`${props.PostImg}`} alt={`${props.UserName}Posts`} className="PostImage"/>
                <p className="Description">{props.Description}</p>
            </div>
            
        </div>
     );
}