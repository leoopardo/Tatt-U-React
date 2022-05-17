import "./post-style.css"
export function PostCard(props) {
    return ( 
        <div className="Post">
            <div className="PostHeader">
                <img src={`${props.ProfileImg}`} alt={`${props.UserName}ProfileImage`} className="PostProfile"/>
                <h5>{props.UserName}</h5>
                
            </div>
            <div>
                <img src={`${props.PostImg}`} alt={`${props.UserName}Posts`} className="PostImage"/>
                <p className="Description">{props.Description}</p>
            </div>
            
        </div>
     );
}
