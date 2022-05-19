import { api } from "../../api/api";
export function UnfollowButton(props) {
        async function handleUnfollow(){
            try{
                const response = await api.put(`/user/unfollow/${props._id}`)
                console.log(response.data)
               }catch(error){
                   console.log(error)
               }
        }
    return (
    
        <button onClick={handleUnfollow}>Unfollow</button>
     );
}