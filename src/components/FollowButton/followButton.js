import { api } from "../../api/api";
export function FollowButton(props) {
        async function handleFollow(){
            try{
                const response = await api.put(`/user/follow/${props._id}`)
                console.log(response.data)
               }catch(error){
                   console.log(error)
               }
        }
    return (
    <div>
        <button onClick={handleFollow}>Follow</button>
    </div> );
}