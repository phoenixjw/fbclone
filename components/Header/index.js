import Image from "next/image";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import HeaderIcon from "../Headericon";

function Header() {
    return(
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Header left */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" 
                 width={40}
                 height={40} 
                 />
                 <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600"/>
                    <input 
                    className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" 
                    type="text" 
                    placeholder="Search Facebook" 
                    />

                 </div>
            </div>
            {/* Header center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active={true} imgURL="/home-icon.svg"/>
                    <HeaderIcon imgURL="/flag-icon.svg"/>
                    <HeaderIcon imgURL="/play-icon.svg"/>
                    <HeaderIcon imgURL="/shopping-cart-icon.svg"/>
                    <HeaderIcon imgURL="/group-icon.svg"/>
                

                </div>

            </div>
            {/* Header right */}
            <div>
                {/* profile pic */}
            </div>
        </div>
    )
}

export default Header