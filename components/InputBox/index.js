import Image from "next/image";
import { useSession } from "next-auth/react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import {  db, storage } from "@/firebase";
import { collection, addDoc, serverTimestamp, setDoc, doc} from "firebase/firestore";
import {ref, uploadString, getDownloadURL, getStorage} from "firebase/storage"; 




function InputBox() {
    const {data: session} = useSession();
    const [message, setMessage] = useState("");
    // const inputRef =useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const handleChangeMessage = (event) => {
        const message = event.target.value;
        setMessage(message);
    }


    const handleSubmit = async (event) => {
        // const response = await fetch (`/api/posts?name=${session.user.name}&message=${message}&email=${session.user.email}&image=${session.user.image}&image_to_post${imageToPost}`)
        // const data = await response.json();
        // // console.log(session.user.name)
        // // console.log(imageToPost)
        // console.log(data)


        const docRef = await addDoc(collection(db,"posts"), 
        {
            name: session.user.name,
            email: session.user.email,
            message: message,
            image: session.user.image,
            timestamp: serverTimestamp()
        }).then((document) => {
            if (imageToPost) {
                const storageRef = ref(storage, `posts/${document.id}`);

                console.log(imageToPost)
          
                uploadString(storageRef, imageToPost, 'data_url').then((snapshot) => {
                  console.log('Uploaded a data_url string!');
                  getDownloadURL(snapshot.ref).then((url) => {
                    setDoc(doc(db, "posts", document.id),{postImage: url}, {merge: true});

                  });
                });
      
              setMessage("")
              removeImage()

            }
            setMessage("")
            removeImage()
        })

        // const storageRef = ref(storage, `posts`);

        //   console.log(imageToPost)
    
        //   uploadString(storageRef, imageToPost, 'data_url').then((snapshot) => {
        //     console.log('Uploaded a data_url string!');
        //   });

        // setMessage("")
        // removeImage()
       
};

// Using FileReader API to add image to post
    const addImageToPost = (event) => {
        const file  = event.target.files[0];
        const reader = new FileReader();
        console.log(file.type)
        // Chekck file is an image blob, and can then be read as url
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }

    };

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-x4 p-4 items-center">
                <Image
                    className="rounded-full"
                    src={session.user.image}
                    width="40"
                    height="40"
                    style={{objectFit:"fixed"}}
                />

                <form className="flex flex-1">
                    <input
                     className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                     type="text"
                     value={message}
                     onChange={handleChangeMessage}
                     placeholder={`What's on your mind, ${session.user.name}?`}
                     />
                    <button className="rounded-xl px-4  bg-blue-900 text-white " type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>

                {/* Only shows when theres an image to post */}
                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col p-2 filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost} alt = "" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}

            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>

                </div>


                <div onClick={()=> filepickerRef.current.click()} className="inputIcon">
                    <input 
                        ref={filepickerRef}    
                        onChange={addImageToPost} 
                        type="file" 
                        hidden
                        
                    />
                    <CameraIcon className="h-7 text-green-400"/>
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>


                </div>

                <div className="inputIcon">
                    <FaceSmileIcon className="h-7 text-yellow-300"/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>

                </div>




            </div>

        </div>
    )
}

export default InputBox;