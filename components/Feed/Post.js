import Image from "next/image";
import { ShareIcon, HandThumbUpIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

function Post({ name, message, email, image, postImage, timestamp}) {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                    <img 
                        className="rounded-full" 
                        src={image}
                        width={40} 
                        height={40}
                        alt ="Error" 
                        
                    />
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-gray-400">
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                    </div>
                </div>
                <p className="pt-4">{message}</p>
            </div>
{/* 
            {postImage&& (
                <div className="relative h-56 md:h-96 bg-white">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-pj.appspot.com/o/posts%2FFEZkTeshAecSJKBRvANY?alt=media&token=ffccc9f8-56c0-42c9-8b19-b54fa2bce2a8" style='cover' fill="true"/>
                </div>

            )} */}


            {/* Footer of post*/}
            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                <div className="inputIcon rounded-none rounded-bl-2xl">
                    <HandThumbUpIcon className="h-4"/>
                    <p className="text-xs sm:text-base">Like</p>
                </div>
                <div className="inputIcon rounded-none">
                    <ChatBubbleLeftIcon className="h-4"/>
                    <p className="text-xs sm:text-base">Comment</p>
                </div>
                <div className="inputIcon rounded-none rounded-br-2xl">
                    <ShareIcon className="h-4"/>
                    <p className="text-xs sm:text-base">Share</p>
                </div>



            </div>
        </div>
    )
}
export default Post