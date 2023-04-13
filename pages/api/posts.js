import { db, storage } from "@/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import {ref, uploadString, getDownloadURL, getStorage} from "firebase/storage"; 

export default async function handle(req, res) {
    const { name, email, message, image, image_to_post } = req.query;
       // const docRef = await addDoc(collection(db, "posts"), 
        // {
        //     name: name,
        //     email: email,
        //     message: message,
        //     image: image,
        //     timestamp: serverTimestamp()

        // }) 

            if (image_to_post != null) {
                const storageRef = ref(storage,"posts");
                const snapshot = uploadString(storageRef, image_to_post, "data_url");
                const url =  await getDownloadURL(snapshot.ref);
                

                const docRef = await addDoc(collection(db, "posts"), 
                {
                    name: name,
                    email: email,
                    message: message,
                    image: image,
                    timestamp: serverTimestamp(),
                    postImage: url
        
                })
                res.json({ Post: `post written with ID ${docRef.id}`});
            } else {
                const docRef = await addDoc(collection(db, "posts"), 
                {
                    name: name,
                    email: email,
                    message: message,
                    image: image,
                    timestamp: serverTimestamp()

                }) 

                res.json({ Post: `post written with ID ${docRef.id}`});
                

            }

        }


        // .then((doc) => {
        //     if (image_to_post != null) {
        //         const storageRef = ref(storage, `posts/${doc}`);
        //         const uploadTask = uploadString(storageRef, image_to_post,"data_url")
        //         uploadString(storageRef, image_to_post, "data_url").then((snapshot) => {
        //             getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        //                 setDoc(db, "posts", doc), {image_to_post: url}, {merge: true};
        //             })
        //         });
        //     }
        // })
        
         

    
        


       
    //    .then((doc) => {
    //     if (image_to_post) {
    //       const storageRef = ref(storage, `posts/${doc.id}`) ;
  
    //       uploadString(storageRef, image_to_post, "data_url").then((snapshot) => {
    //         getDownloadURL(snapshot.ref).then((url) => {
    //           addDoc(collection(db, "posts"), { postImage: url });
    //         });
    //       });
  




        // })}

