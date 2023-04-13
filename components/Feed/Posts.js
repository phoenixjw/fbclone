import { useCollection } from "react-firebase-hooks/firestore"
import { collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import Post from "./Post";
function Posts() {
    const [snapshot, loading, error] = useCollection(collection(db, 'posts'),orderBy('timestamp', 'desc')
        );
        // onSnapshot(collection(db, 'posts'), (snap)=> {
        //             snap.forEach(post => {
        //                 console.log(post.data().message);
    
        //             })
        //         })

    return(
        <div>
            {snapshot?.docs.map(post =>(
                
                <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}    
           
                />
            
            ))}
        </div>

    )
}
export default Posts