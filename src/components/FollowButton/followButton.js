import { api } from "../../api/api";
<<<<<<< HEAD

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

=======
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
>>>>>>> 85116f654e26a5fd6ac7027ca88b2100f91389fe
